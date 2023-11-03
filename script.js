console.log('JS está sendo executado');

document.addEventListener('DOMContentLoaded', function () {
    const cardOne = document.getElementById('portfolioUm');
  
    cardOne.addEventListener('mouseenter', () => {
      cardOne.style.transform = 'scale(1.2)';
      console.log('Mouse entrou no card');
    });
  
    cardOne.addEventListener('mouseleave', () => {
      cardOne.style.transform = 'scale(1)';
      console.log('Mouse saiu do card');
    });
  });
  
const containerCertificates = document.getElementById('Certificates');
containerCertificates.addEventListener('mouseenter', )