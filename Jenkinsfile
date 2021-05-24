pipeline {
    agent any
     stages {
        stage('Install') {
            steps {
                echo 'Installing...'
                sh 'nvm use 12.16.1'
                sh 'yarn'
            }
        }
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