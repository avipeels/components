pipeline {
    agent any
     stages {
        stage('Install') {
            steps {
                echo 'Installing'
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