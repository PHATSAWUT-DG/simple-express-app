pipeline {
    agent any
    tools {
        nodejs 'nodejs-lts' // ชื่อต้องตรงกับที่ตั้งใน Global Tool Configuration
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/PHATSAWUT-DG/simple-express-app'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'npx sonar-scanner -Dsonar.projectKey=lab05'
                }
            }
        }
        stage('Quality Gate') {
            steps {
                timeout(time: 15, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}