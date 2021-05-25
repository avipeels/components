pipeline {
    agent {
        docker {
            image 'node:12.6'
        }
    }
    // tools {nodejs "myNode"}
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