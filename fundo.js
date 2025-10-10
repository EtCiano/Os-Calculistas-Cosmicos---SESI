const fundoelementos = [];
for (let i = 1; i <= 128; i++) {
    const fundoelemento = document.getElementById(`fundoelemento${i}`);
    fundoelementos.push(fundoelemento);
}

document.addEventListener('mousemove', (event) => {
            const mousex = event.clientX
            const mousey = event.clientY
            fundoelementos.forEach((fundoelemento) => {
                const rect = fundoelemento.getBoundingClientRect();
                const recty = rect.top;
                const rectx = rect.left;
                const limite = 80

                if (mousex > rectx + limite || mousey > recty + limite || mousex < rectx - limite || mousey < recty - limite) {
                    fundoelemento.style.background = 'rgba(0, 3, 88, 1)';
                } else {
                    fundoelemento.style.scale = '12';
                    fundoelemento.style.borderRadius = '0px';
                    fundoelemento.style.background = 'bisque'
                }
                const todos = fundoelementos.every(fundoelemento => fundoelemento.style.scale === '12');
                if (todos === true) {
                    fundoelementos.forEach((fundoelemento) => {
                        fundoelemento.style.scale = '1';
                    fundoelemento.style.borderRadius = '100%';
                    });
                }
        })
    })