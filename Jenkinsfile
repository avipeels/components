pipeline {
    agent any
    tools {nodejs "myNode"}
    stages {
        stage('Build') {
            steps {
                echo 'node -v'
            }
        }
        stage('Test') { 
            steps {
                sh 'yarn test' 
            }
        }
    }
}