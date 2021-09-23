/**
 * Filter a set of attributes by passing two arrays, the filtered attributes and source attributes.
 *
 * @param {array} filtered
 * @param {array} attributes
 */
// eslint-disable-next-line
export const filterAttributes = (attributes: any[], filtered: string[]) => {
    return attributes.filter(a => a && !filtered.includes(a.name)).reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {});
};

/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `ion-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 *
 * @source https://github.com/ionic-team/ionic-framework/blob/ae1325cee698066a71aae4e7deb953c4185c0926/core/src/utils/helpers.ts#L28
 *
 */
export const inheritAttributes = (el: HTMLElement, attributes: string[] = []) => {
    // eslint-disable-next-line
    const attributeObject: { [k: string]: any } = {};

    attributes.forEach(attr => {
        if (el.hasAttribute(attr)) {
            const value = el.getAttribute(attr);
            if (value !== null) {
                attributeObject[attr] = el.getAttribute(attr);
            }
            el.removeAttribute(attr);
        }
    });

    return attributeObject;
}
