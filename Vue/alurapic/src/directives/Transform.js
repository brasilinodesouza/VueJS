import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(el, binding, vnode) {
        let current = 0;

        el.addEventListener('dblclick', function() { 

            let incremento = binding.value || 45;
            let efeito;
        
            if (!binding.arg || binding.arg == 'rotate') {
                
                if (binding.modifiers.reverse){
                    current-=incremento;
                }else{
                    current += incremento;
                }
                efeito = el.style.transform = 'rotate(' + current + 'deg)';

            }else if (binding.arg || binding.arg == 'scale') {
                efeito = `scale(${incremento})`;
            }
            el.style.transform = efeito;
            if (binding.modifiers.animate) el.style.transition = 'transform 1s';

        })
        }
});
