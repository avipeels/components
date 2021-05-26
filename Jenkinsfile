pipeline {
    agent any
    environment {
        dockerHome = tool 'myDocker'
        nodeHome = tool 'myNode'
        PATH = "$dockerHome/bin:$nodeHome/bin:$PATH"
    }

    stages {
        stage('Build') {
            steps {
                sh 'node --version'
                sh 'yarn'
            // sh 'docker version'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
        stage('Echoes') {
            steps {
                sh 'docker version'
            }
        }
    }
}
