
const LinkWord = '-'

export function joinClassNames(...classNames: (string | undefined | null | false)[]): string {
  return classNames.filter(Boolean).join(' ');
}
// 将前缀添加到类名中
export function connectPrifix(prefix: string): (word: string) => string {
    function getLinkWord(word: string): string {
        const prefixClassName = prefix + LinkWord + word
        return prefixClassName
    }
    return getLinkWord
}

export function connectClassNames(...classNames:string[]): string {
  return classNames.join(LinkWord)
}