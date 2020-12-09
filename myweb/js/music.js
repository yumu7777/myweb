var audio;
		window.onload = function() {
			initAudio();
		}
		var initAudio = function() {
			
			audio = document.getElementById('audio');
			
		}

		
		function playOrPaused(id, obj) {
			if(audio.paused) {
				audio.play();
				obj.innerHTML = '暂停';
				return;
			}
			audio.pause();
			obj.innerHTML = '播放';
		}

		function hideOrShowControls(id, obj) {
			if(audio.controls) {
				audio.removeAttribute('controls');
				obj.innerHTML = '显示控制框'
				return;
			}
			audio.controls = 'controls';
			obj.innerHTML = '隐藏控制框'
			return;
		}

		function vol(id, type, obj) {
			if(type == 'up') {
				var volume = audio.volume + 0.1;
				if(volume >= 1) {
					volume = 1;

				}
				audio.volume = volume;
			} else if(type == 'down') {
				var volume = audio.volume - 0.1;
				if(volume <= 0) {
					volume = 0;
				}
				audio.volume = volume;
			}
			document.getElementById('nowVol').innerHTML = returnFloat1(audio.volume);
		}

		function muted(id, obj) {
			if(audio.muted) {
				audio.muted = false;
				obj.innerHTML = '开启静音';
			} else {
				audio.muted = true;
				obj.innerHTML = '关闭静音';
			}
		}
		/*2*/
		

