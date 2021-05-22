pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim' 
            args '-p 3000:3000' 
        }
    }
     stages {
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}