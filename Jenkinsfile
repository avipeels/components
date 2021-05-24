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
                sh 'yarn test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}