import bodyParser from 'body-parser';
import { context, contextName } from './context';

export function getInitialState(params) {
    return params.eventex.executeQuery(`/${context.projection.queries[0].name}`, contextName);
}

const ROUTES = {};
export const passedEvents = [];

if (context.aggregate) {
    context.aggregate.commands.forEach((command) => {
        ROUTES[`/api/${context.aggregate.name}/${command.name}`] = `/${context.aggregate.name}/${command.name}`;
        passedEvents.push(command.event);
    });
}

const jsonBodyParser = bodyParser.json();

export function enable({ routesController, backendHelper }) {
    Object.keys(ROUTES).forEach(key =>
        routesController.addRouteHandlers('POST', key, [jsonBodyParser, (req, res) => {
            backendHelper.executeCommand(ROUTES[key], req.body, contextName)
                .then(response => (response.ok ? response.json() : response.text()
                    .then(text => Promise.reject(text))
                ))
                .then(result => res.json(result))
                .catch(errText => res.status(400).send(errText));
        }])
    );
}
