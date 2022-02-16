<!-- Compra GTM -->
<script>
    var googleTotalValue = Number(document.querySelector('.woocommerce-order-overview .amount bdi').textContent.replace(/\D/g,'') / 100);
    var googleTransactionId = document.querySelector('.order').innerText.replace('Número do pedido:\n','');
    
  if(window.location.href.includes('finalizacao')){
        dataLayer.push({
            'event': 'purchase',
            'value' : googleTotalValue,
            'transaction_id': googleTransactionId,
            'currency': 'BRL'
        });
    };
</script> 