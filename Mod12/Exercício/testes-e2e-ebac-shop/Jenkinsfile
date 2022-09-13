pipeline {
    agent any

    stages {
        stage('Conectar o Git') {
            steps {
                git branch: 'main', url: 'https://github.com/EBAC-QE/testes-api-cy.git'
            }
        }
        stage('Instalar Dependências') {
            steps {
                powershell 'npm install'
            }
        }
        stage('executar os testes') {
            steps {
                powershell 'npm rum cy:run'
            }
        }
    }
}