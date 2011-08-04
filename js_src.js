/* HTML menu
   by Marcker - marckfree@gmail.com
   MIT License - < http://opensource.org/licenses/mit-license.php > */

var d = document;
var w = window;

w.onload = function () {
	menu = d.getElementById('menu');
	if (menu) {
		li = [];
		a = []
		items = new Array();
		items[0] = new Array();
		items[1] = new Array();
		items[0][0] = 'Home'; items[1][0] = 'home.html';
		items[0][1] = 'Contato'; items[1][1] = 'contato.html';	
		items[0][2] = 'Biografia'; items[1][2] = 'biografia.html';
		items[0][3] = 'Aulas dadas'; items[1][3] = 'aulas_dadas.html';
		items[0][4] = 'História'; items[1][4] = 'historia.html';
		items[0][5] = 'Filosofia'; items[1][5] = 'filosofia.html';
		items[0][6] = 'Google'; items[1][6] = 'http://www.google.com';
		items[0][7] = 'Debian'; items[1][7] = 'http://debian.org';
		n_items0 = items[0].length;
		n_items1 = items[1].length;
		
		if (n_items0 == n_items1) {
			n_items = n_items0 = n_items1;
			for (i = 0; i <= n_items-1; i++) {
				//create list ('li' tag)
				li[i] = d.createElement('li');
				li[i].setAttribute('id', 'link' + i);		
				menu.appendChild(li[i]);
				
				//create hyperlinks ('a' tag)
				a[i] = d.createElement('a');
				a[i].setAttribute('href', items[1][i]);
				a[i].setAttribute('title', 'Acesse a página ' + items[0][i].toUpperCase());		
				a[i].innerHTML = items[0][i] 
				item = d.getElementById('link' + [i]);
				item.appendChild(a[i]);
			}	
		}
		else {
			d.write('<p>Erro ao criar o menu (Itens ou Links faltando).</p>');
			d.write('<p><a href="javascript:window.location.reload();">Atualize</a> a página caso já tenha corrigido o problema.</p>');
		}	
	}
	else {
		d.write('<p>Erro ao criar o menu (ID menu não existe na página).</p>');
		d.write('<p><a href="javascript:window.location.reload();">Atualize</a> a página caso já tenha corrigido o problema.</p>');
	}	
}