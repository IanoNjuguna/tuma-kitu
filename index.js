import { createWalletClient, custom } from 'https://esm.sh/viem'

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
const avaxAmountInput = document.getElementById("avaxAmount")

let walletClient = createWalletClient

async function connect()
{
	if (typeof window.ethereum !== "undefined")
	{
		walletClient = createWalletClient({
			transport: custom(window.ethereum)
		})
		await walletClient.requestAddresses()

	}
	else
	{
		connectButton.innerHTML = "Install Metamask!"
	}
}

async function fund() {
	const avaxAmount = avaxAmountInput.value
	console.log(`Funding with ${avaxAmount}...`)
}

connectButton.onclick = connect
fundButton.onclick = fund
