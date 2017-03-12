export const backendPort = 5000;
export const host = 'localhost';

export const contextPort = 5001;

export const eventStore = {
    type: 'file',
    pathToFile: './db.json'
};

// Uncomment the following to store events in mongoDB (instead of local file)
// export const eventStore = {
//     type: 'mongoDB',
//     host: 'localhost',
//     port: 27017,
//     name: 'DxAppModule',
//     collectionName: 'DomainEvents'
// };

export const messageBus = {
    provider: 'localmq'
};


// Uncomment the following to use RabbitMQ message bus (instead of local server)
// export const messageBus = {
//     provider: 'rabbitmq',
//     url: 'amqp://localhost:5672'
// };
