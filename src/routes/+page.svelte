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
	let words = 'Reporter\nHospital\nSecurity guard\nAunt\nWork with animals\nDraw\nMake cakes\nTV station\nFirefighter\nOutdoors\nPaint\nBaker\nWear a uniform\nCousin\nZookeeper\nAnimation\nFarmer\nEngineer\nFamous\nCashier\nMechanic\nHotel\nPolice officer\nUncle\nChef\nVehicle\nNewspaper\nAnimator\nUse a vehicle\nWriter\nIndoors\nHelp people\nReceptionist\nBookstore\nUniform\nSupermarket\nUse a computer\nWork\nRestaurant\nVet\nWork indoors\nRich\nArtist\nWork outdoors\nDentist\nGrow up\nCook\nWrite';
	let meanings =
		'phóng viên nhà báo\nbệnh viện\nnhân viên an ninh, bảo vệ\ndì, cô\nlàm việc với động vật\nvẽ\nlàm bánh\nđài truyền hình\nlính cứu hỏa\nngoài trời\ntô vẽ\nthợ làm bánh\nmặc một bộ đồng phục\nanh/chị/em họ\nngười trông coi sở thú\nhoạt hình đồ họa\nnông dân\nkỹ sư\nnổi tiếng\nthu ngân, nhân viên thu tiền\nthợ cơ khí\nkhách sạn\ncảnh sát\nchú, bác, cậu\nđầu bếp\nphương tiện giao thông, xe cộ\nbáo chí\nnhà thiết kế hoạt hình\nsử dụng một phương tiện giao thông\nnhà văn, người viết\ntrong nhà\ngiúp đỡ mọi người\nnhân viên tiếp tân\ntiệm sách\nbộ đồng phục\nsiêu thị\nsử dụng một cái máy vi tính\ncông việc, làm việc\nnhà hàng, quán ăn\nbác sĩ thú y\nlàm việc trong nhà\ngiàu\nhọa sĩ, nghệ sĩ\nlàm việc ngoài trời\nnha sĩ\nlớn lên, trưởng thành\nnấu ăn\nviết';

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
