export const logger = (targ, key, descriptor) => {
    descriptor.value = new Proxy(descriptor.value, {
        apply(target, thisArg, argumentsList) {
            console.log(`Function ${key}() was called with arguments ${
                argumentsList.map(arg => `${JSON.stringify(arg instanceof URL ? arg.toString() : arg)}`)
            }`);
            return target.apply(thisArg, argumentsList);
        },
    });
};
