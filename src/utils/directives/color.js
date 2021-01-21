const vColor = {
    inserted: function (el, binding) {
        const interval = binding.arg ? binding.arg : 1000
        if (Array.isArray(binding.value)) {
            let i = 0
            el.style.color = binding.value[i]
            el.dataset.time = setInterval(() => {
                if (i > binding.value.length - 1) {
                    i = 0
                }
                el.style.color = binding.value[i]
                i++
            }, interval)
        } else {
            el.style.color = binding.value
        }
    },
    componentUpdated: function (el, binding) {
        clearInterval(el.dataset.time)
        const interval = binding.arg ? binding.arg : 1000
        if (Array.isArray(binding.value)) {
            let i = 0
            el.style.color = binding.value[i]
            el.dataset.time = setInterval(() => {
                if (i > binding.value.length - 1) {
                    i = 0
                }
                el.style.color = binding.value[i]
                i++
            }, interval)
        } else {
            el.style.color = binding.value
        }
    },
    unbind: function (el, binding) {
        clearInterval(el.dataset.time)
    }
}

export default vColor
