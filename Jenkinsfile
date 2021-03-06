pipeline {
    agent any
    environment {
        PROJECT_NAME = 'proven-wavelet-314512'
        DOCKER_HOME = tool 'myDocker'
        NODE_HOME = tool 'myNode'
        GIT_HOME = tool 'myGit'
        PATH = "$DOCKER_HOME/bin:$NODE_HOME/bin:$GIT_HOME/bin$PATH"
        GCR_REPO = "gcr.io/${PROJECT_NAME}"
        NPM_TOKEN = credentials('Nexus')
        GIT_TOKEN = credentials('githubhttp')
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
                sh 'yarn'
                sh 'yarn test'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }
        stage('Update package version') {
            steps {
                echo 'publishing new version'
                sh 'git checkout -f main'
                echo 'git remote -v'
                sh 'git pull'
                sh 'npm run releaseVersion:alpha'
            }
        }
        stage('Update main branch') {
            steps {
                sh 'git pull origin main'
                sh 'git push origin HEAD:main --follow-tags'
            }
        }
        // stage('Docker build image') {
        //     steps {
        //         script {
        //             dockerImage = docker.build("avinashpsk/components:${env.BUILD_TAG}")
        //         }
        //     }
        // }
        // stage('Docker push image') {
        //     steps {
        //         script {
        //             docker.withRegistry('', 'c777ad83-5e2a-4670-867c-b350a399569e') {
        //                 dockerImage.push()
        //                 dockerImage.push('latest')
        //             }
        //         }
        //     }
        // }
        stage('Publish to nexus') {
            steps {
                script {
                    sh 'npm run release:alpha'
                }
            }
        }
    }
}
