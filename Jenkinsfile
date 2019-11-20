pipeline {
   agent any
   tools {nodejs "node"}

   stages {
        stage('cloning git') {
            steps {
                git 'git@github.com:johnmorrisQADeveloper/webapp.git'
            }
        }
        stage('install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('run test') {
            steps {
                sh 'npm test'
            }
        }
   }
}