pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-mobo',
                    url: 'https://github.com/noecruz2/mobo-glow-up.git'
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Archive build') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }
}
