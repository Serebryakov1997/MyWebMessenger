import Handlebars from 'handlebars';

export default function handlebars() {
    const fileRegExp = /\.hbs$|\.handlebars$/;

    console.log('src: ', src);

    return {
        name: 'vite-plugin-handlebars-precompile',
        transform(src, id) {
            if (!fileRegExp.test(id)) {
                return;
            }


            const code = `
                import Handlebars from 'handlebars/runtime';
                
                export default Handlebars.template(${Handlebars.precompile(src)});
            `;

            return {
                code
            };
        }
    }
}