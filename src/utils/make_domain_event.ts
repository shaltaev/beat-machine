export const makeDomainEvent = (domain: string) => <T = undefined>(name: string, detail?: T): CustomEvent<T> =>
  new CustomEvent(`${domain}_${name}`, { detail })
