pipeline {
    agent any

    stages {       
        stage('Instalar dependencias') {
            steps {
               powershell 'npm install'
            }
        }
        stage('Executar Testes') {
            steps {
              powershell 'npm run cy:run' 
            }
        }    
        stage('Gerar Relatório') {
            steps {
              publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'mochawesome.html', reportName: 'EBAC Store Automation Report', reportTitles: '']) 
            }
        }
    }
}
