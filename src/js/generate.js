// generate.js
const { execSync } = require('child_process');

const name = process.argv[2];

if (!name) {
    console.error('❌ Please provide a name. Example: node generate.js user');
    process.exit(1);
}

const commands = [
    `nest g module ${name}`,
    `nest g controller ${name}`,
    `nest g service ${name}`,
    `nest g class ${name}.entity --no-spec`,
];

commands.forEach((cmd) => {
    try {
        console.log(`▶ Running: ${cmd}`);
        execSync(cmd, { stdio: 'inherit' });
    } catch (error) {
        console.error(`Failed: ${cmd}`);
    }
});
