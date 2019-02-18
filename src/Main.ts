import { MainView } from './MainView'

function main() {
    const canvas = document.createElement('canvas');
    document.getElementById('document');
    const ctx = canvas.getContext('2d');
    if (ctx == null) {
        document.write('您的浏览器不支持canvas 2d 渲染,建议更换浏览器');
    }
    else {
        canvas.width = 400;
        canvas.height = 300;
        document.body.appendChild(canvas);
        new MainView(ctx);
    }
}
main();