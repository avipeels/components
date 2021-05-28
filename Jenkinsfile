pipeline {
    agent any
    environment {
        PROJECT_NAME = 'proven-wavelet-314512'
        DOCKER_HOME = tool 'myDocker'
        NODE_HOME = tool 'myNode'
        GIT_HOME = tool 'myGit'
        PATH = "$DOCKER_HOME/bin:$NODE_HOME/bin:$GIT_HOME/bin$PATH"
        GCR_REPO = "gcr.io/${PROJECT_NAME}"
    }

    stages {
        // stage('Build Application') {
        //     agent {
        //         docker  {
        //             reuseNode: true
        //             image: 'gcr.io/proven-wavelet-314512/node'
        //         }
        //     }
        // }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }
        stage('Docker build image') {
            steps {
                script {
                    dockerImage = docker.build("avinashpsk/components:${env.BUILD_TAG}")
                }
            }
        }
        stage('Docker push image') {
            steps {
                script {
                    docker.withRegistry('', 'c777ad83-5e2a-4670-867c-b350a399569e') {
                        dockerImage.push()
                        dockerImage.push('latest')
                    }
                }
            }
        }
        stage('Push to nexus') {
            steps {
                script {
                    TAR_FILENAME = "${PROJECT_NAME}-B${env.BUILD_NUMBER}.tar.gz"
                    sh "tar -zcf ${TAR_FILENAME} * --exclude ${TAR_FILENAME} --exclude .git --exclude tests --exclude coverage"
                    sh "mvn deploy:deploy-file -DgroupId=components -DartifactId=${PROJECT_NAME} -Dversion=1 -DgeneratePom=false -Dpackaging=tar.gz -DrepositoryId=turquoise-components -Durl=http://146.148.79.21:8081/repository/turquoise-components/ -Dfile=${TAR_FILENAME} -B"

                }
            }
        }
    }
}
