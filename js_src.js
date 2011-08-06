/* HTML menu
   by Marcker - marckfree@gmail.com
   MIT License - < http://opensource.org/licenses/mit-license.php > */

var d = document;
var w = window;

w.onload = function () {
	menu = d.getElementById('menu');
	if (menu) {
		try {
			normalized_link = [];
			li = [];
			a = [];
			counter = 0;
			
			if (json_object.links.length) {
				n_links = json_object.links.length;
				
				for (i = 0; i <= n_links-1; i++) {
					normalized_link[i] = json_object.links[i].link;
					normalized_link[i] = normalized_link[i].toLowerCase().slice(0, 5);
					normalized_link[i] = normalized_link[i].replace(new RegExp('[áàãâ]', 'g'), 'a');
					normalized_link[i] = normalized_link[i].replace(new RegExp('[éê]', 'g'), 'e');
					normalized_link[i] = normalized_link[i].replace(new RegExp('í', 'g'), 'i');
					normalized_link[i] = normalized_link[i].replace(new RegExp('[óõô]', 'g'), 'o');
					normalized_link[i] = normalized_link[i].replace(new RegExp('[úü]', 'g'), 'u');
					normalized_link[i] = normalized_link[i].replace(new RegExp('ç', 'g'), 'c');
					normalized_link[i] = normalized_link[i].replace(new RegExp('&', 'g'), '');
					normalized_link[i] = normalized_link[i].replace(new RegExp('\\s+', 'g'), '_');
					
					//create list ('li' tag);
					li[i] = d.createElement('li');
	
					if (normalized_link[i] == normalized_link[i-1]) {
						counter += 1;
						li[i].setAttribute('id', 'link_' + normalized_link[i] + counter);		
						menu.appendChild(li[i]);
						
						//create hyperlinks ('a' tag) if repeat link text;
						a[i] = d.createElement('a');
						a[i].setAttribute('href', json_object.links[i].url);
						a[i].setAttribute('title', 'Acesse a página ' + json_object.links[i].link.toUpperCase());		
						a[i].innerHTML = json_object.links[i].link; 
						item_menu = d.getElementById('link_' + normalized_link[i] + counter);
						item_menu.appendChild(a[i]);		
					}
					else {
						counter = 0;
						li[i].setAttribute('id', 'link_' + normalized_link[i]);		
						menu.appendChild(li[i]);
						
						//create hyperlinks ('a' tag);
						a[i] = d.createElement('a');
						a[i].setAttribute('href', json_object.links[i].url);
						a[i].setAttribute('title', 'Acesse a página ' + json_object.links[i].link.toUpperCase());		
						a[i].innerHTML = json_object.links[i].link; 
						item_menu = d.getElementById('link_' + normalized_link[i]);
						item_menu.appendChild(a[i]);	
					}
				}	
			}
			else {
				d.write('<p>Erro ao criar o menu (Itens ou Links faltando no arquivo Json).</p>');
				d.write('<p><a href="javascript:window.location.reload();">Atualize</a> a página caso já tenha corrigido o problema.</p>');
			}				
		}
		catch (error) {
			d.write('<p>Erro ao criar o menu (Objeto Json inexistente).</p>');
			d.write('<p><a href="javascript:window.location.reload();">Atualize</a> a página caso já tenha corrigido o problema.</p>');
		}
	}		
	else {
		d.write('<p>Erro ao criar o menu (ID <i>menu</i> não existe na página HTML).</p>');
		d.write('<p><a href="javascript:window.location.reload();">Atualize</a> a página caso já tenha corrigido o problema.</p>');
	}	
}