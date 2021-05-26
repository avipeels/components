pipeline {
    agent {
        docker {
            image 'node:13.6'
        }
    }
    tools {docker 'myDocker'}
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