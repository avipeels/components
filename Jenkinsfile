pipeline {
    agent {
        docker {
            image 'node:12.6'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh "npm install -g yarn"
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