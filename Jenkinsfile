pipeline{
    agent any
    stages {
        stage('Cleanup older images and containers') {
            steps{
                sh '''
                docker stop $(docker ps | grep "Wekeeper" | awk '{print $1}') || true
                docker rm -f $(docker ps -a | grep "Wekeeper" | awk '{print $1}') || true
                docker rmi -f $(docker images | grep  "Wekeeper" | awk '{print $3}') || true

                docker stop $(docker ps -a | grep "Exited" | awk '{print $1 }') || true
                docker rm $(docker ps -a | grep "Exited" | awk '{print $1 }') || true
                docker rmi $(docker images | grep "none" | awk '{print $3}') || true
                '''
            }
        }
        // stage('Cloning Gitlib') {
        //     steps{
        //         sh '''
        //             echo "---当前路径---"
        //             pwd'''
        //         git credentialsId: 'EwellGitLabAccessTokenByPass', url: 'http://47.111.162.106:10060/kylin/Wekeeper.git', branch:'master'
        //     }
        // }
        stage('Building image') {
            steps{
                sh '''
                docker build -t Wekeeper:${BUILD_NUMBER} .
                '''
            }
        }
        stage('Run app in container') {
            steps{
                sh '''
                docker run --name Wekeeper_${BUILD_NUMBER} -d -p 3000:80 Wekeeper:${BUILD_NUMBER}
                '''
            }
        }
    }
}

// test
// pipeline {
//     agent any

//     stages {
//         stage('Build') {
//             steps {
//                 echo 'Building..'
//             }
//         }
//         stage('Test') {
//             steps {
//                 echo 'Testing..'
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 echo 'Deploying....'
//             }
//         }
//     }
// }
