const process = require("process")
const fs = require('fs');

const scaffoldReadmeContent = (methodName) => {
    return `## ${methodName}\n\n### Parameters\n-\n\n### Returns\n-`;
}

const scaffoldDataTypesContent = (methodName) => {
    return `type Params = [\n]\n\ntype Returns = [\n]`;
}

function createDirectory(methodName) {
    const directory = `./${methodName}`

    if (!fs.existsSync(directory)){
        fs.mkdirSync(directory);
    }
}

async function createFile(directory, fileName, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`${directory}/${fileName}`, content,
            function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            }
        )
    })
}

async function createFiles(methodName) {
    const directoryToWrite = `./${methodName}`;
    const readmeFileName = `README.md`;
    const dataTypeFileName = `${methodName}.ts`;

    await createFile(directoryToWrite, readmeFileName, scaffoldReadmeContent(methodName));
    await createFile(directoryToWrite, dataTypeFileName, scaffoldDataTypesContent(methodName));
}

async function main() {
    let methodName = process.argv[2];

    if (!methodName) {
        throw new Error("Please provide the method name!");
    }

    methodName = methodName.trim();

    await createDirectory(methodName);
    await createFiles(methodName);
}

main()
    .then(() => {
        console.log("success!")
    })
    .catch(err => {
        console.error("error")
        console.error(err);
    });