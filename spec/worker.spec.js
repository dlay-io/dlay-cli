const program = require('../');
process.stdout.on('data', (data) => {
    console.log('recebeu ai')
})
process.stdout.write('skate or die')
const cmd = (command) => {
    const args = ['node', 'dlay']
    return [...args, ...command.split(' ')]
}

const run = (args) => {
    program.parse(cmd(args));
}

describe('worker <name> --jobs', () => {
    describe('with existante file', () => {
        it('abort the operation', () => {
            // program.on('command:worker', (cmd) => {
            //     console.log(cmd)
            // })
            run('worker manobi --jobs ./tmp/job.js');
        });
    });
});