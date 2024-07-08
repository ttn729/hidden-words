<script>
	import NameClass from '../components/NameClass.svelte';
	import PrintButton from '../components/PrintButton.svelte';
	import ScrambleButton from '../components/ScrambleButton.svelte';
	import TopicTitle from '../components/TopicTitle.svelte';
	import WordMeanings from '../components/WordMeanings.svelte';
	import WordMeaningsTable from '../components/WordMeaningsTable.svelte';

	import { onMount, onDestroy } from 'svelte';

	let hideElement = false;

	const handleBeforePrint = () => {
		hideElement = true;
	};

	const handleAfterPrint = () => {
		hideElement = false;
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('beforeprint', handleBeforePrint);
			window.addEventListener('afterprint', handleAfterPrint);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('beforeprint', handleBeforePrint);
			window.removeEventListener('afterprint', handleAfterPrint);
		}
	});

	let topicName = 'Smart Start Grade 5 - Theme 8';
	let words = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nzookeeper';
	let meanings =
		'phóng viên nhà báo\nbệnh viện\nnhân viên an ninh, bảo vệ\ndì, cô, làm việc với động vật\nvẽ\nlàm bánh\nđài truyền hình\nlính cứu hỏa\nngoài trời\ntô vẽ\nthợ làm bánh\nmặc một bộ đồng phục\nanh/chị/em họ\n\n';

	let printMode = false;
	function handleClickPrint() {
		printMode = !printMode;
	}

	/**
	 * @param {string} newWords
	 */
	function updateWords(newWords) {
		words = newWords;
	}

	/**
	 * @param {string} newMeanings
	 */
	function updateMeanings(newMeanings) {
		meanings = newMeanings;
	}
</script>

{#if !hideElement}
	<PrintButton {handleClickPrint} />
	<ScrambleButton {words} {meanings} {updateWords} {updateMeanings} />
{/if}

{#if !printMode}
	<NameClass />
	<TopicTitle {topicName} />
	<WordMeanings {words} {meanings} {updateWords} {updateMeanings} />
{:else}
	<NameClass />
	<WordMeaningsTable {words} {meanings} {topicName} />
{/if}
