//@ts-check

/**
 * @param {string} _text 
 * @returns {boolean}
 */
export function verifyEmail(_text) {
    /**
     * @param {string} _ch
     * @returns {boolean}
    */
    const isValidChar = (_ch) => {
        const isAlpha = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]$/.test(_ch);
        const isDigit = /^[0-9]$/.test(_ch);
        const isExtra = _valid_chars.includes(_ch) || _ch === "@";

        return isAlpha || isDigit || isExtra;
    }

    if (!_text) return false;
    if (_text !== _text.toLowerCase()) return false;

    const _doms = ['gmail.com', 'yahoo.com', 'outlook.com', 'icloud.com', 'hotmail.com'];
    const _valid_chars = ['!','#','$','%','*','+','-','_','=','.'];
    
    if (_valid_chars.includes(_text[0]) || _valid_chars.includes(_text[_text.length - 1]))
        return false;

    for (const ch of _text)
        if (!isValidChar(ch)) return false;
    
    const _pos = _text.indexOf('@');
    if (_pos > 0) {
        for (const dom of _doms)
        if (_text.indexOf(dom, _pos) > 0) return true;
    }

    return false;
}