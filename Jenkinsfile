pipeline {
    agent {
        docker {
            image 'node:13.6'
        }
    }

    stages {
        stage('Build') {
            steps {
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