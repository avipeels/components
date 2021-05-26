pipeline {
    agent any
    environment {
        dockerHome = tool 'myDocker'
        nodeHome = tool 'myNode'
        PATH = "$dockerHome/bin:$nodeHome/bin:$PATH"
    }

    stages {
        stage('Install') {
            steps {
                sh 'node --version'
                sh 'yarn'
            }
        }
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
    }
}
