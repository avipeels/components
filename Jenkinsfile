pipeline {
    agent {
        docker {
            image 'node:13.6'
        }
    }
    tools {nodejs "myNode", docker 'myDocker'}
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