export default function(output, _hist, ...args) {
    let social = args[0];
    switch (social) {
        case 'github':
            window.open('https://github.com/rounak-das2008');
            break;
        case 'discord':
            window.open('https://discord.com');
            break;
        case 'twitter':
            window.open('https://twitter.com/');
            break;
        case 'email':
            window.open('mailto:rounakdas200813@gmail.com');
            break;
        default:
            output.innerHTML += `\
<span data-color="white">Github: <a href="https://github.com/rounak-das2008">@Rounak</a></span>
<span data-color="MediumSlateBlue">Discord: <a href="https://discord.com/">Rounak#7261</a></span>
<span data-color="cyan">Twitter: <a href="https://twitter.com">Twitter</a></span>
<span data-color="yellow">Email: <a href="mailto:rounakdas200813@gmail.com">rounakdas200813@gmail.om</a></span>`;
        return;
    }
    if (social) output.innerHTML += '<span data-color="orange">Opening ' + social + '...</span>';
}
