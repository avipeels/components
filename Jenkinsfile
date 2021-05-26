pipeline {
  agent any
  tools {nodejs "myNode"}
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