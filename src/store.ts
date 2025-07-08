import { writable } from 'svelte/store';

interface HiddenWordsStore {
    numLines: number
    percentHideWords: number
    topicName: string
    isPrintMode: boolean
    words: string
    meanings: string
}
const initialState: HiddenWordsStore = {
    numLines: 0,
    percentHideWords: 90,
    topicName: '',
    isPrintMode: false,
    words: '',
    meanings: '',
}


function createStore() {
    const { subscribe, set, update } = writable(initialState);

    return {
        subscribe,
        setNumLines: (numLines: number) => update(current => ({
            ...current, numLines
        })),
        setPercentHideWords: (percentHideWords: number) => update(current => ({
            ...current, percentHideWords
        })),
        setTopicName: (topicName: string) => update(current => ({
            ...current, topicName
        })),
        setWords: (words: string) => update(current => ({
            ...current, words
        })),
        setMeanings: (meanings: string) => update(current => ({
            ...current, meanings
        })),
        togglePrintMode: () => update(current => ({
            ...current, isPrintMode: !current.isPrintMode
        })),
    };
}

export const store = createStore();