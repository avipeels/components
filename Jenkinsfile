pipeline {
    agent any
    environment {
        // dockerHome = tool 'myDocker'
        nodeHome = tool 'myNode'
        PATH = "$nodeHome/bin:$PATH"
    }

    stages {
        stage('Build') {
            steps {
                // sh 'docker version'
                sh 'node --version'
                sh 'yarn'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
    }
}
