// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT.

import { DOCUMENT_ROOT_ID } from '@/config/client';
import React from 'react';
import { StoryPage } from '@/pages';
import { type StoryProps } from '@/components';
import { hydrateRoot } from 'react-dom/client';
import { inject } from '@vercel/analytics';
import writMdJson from '@/contexts/data/writ.json';

function mount(): void {
  let mountingEl = document.getElementById(DOCUMENT_ROOT_ID);
  if (mountingEl == null) {
    mountingEl = document.createElement('div');
    mountingEl.id = DOCUMENT_ROOT_ID;
    document.body.appendChild(mountingEl);
  }
  const story = writMdJson.metadata.find(({ key }) => key === '0108');
  let genres: string[] = [];
  if (story) {
    genres = story.genres;
  }
  const props: StoryProps = {
    author: 'Washington Irving',
    content: `# Lorem Ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Aliquam purus sit amet luctus venenatis lectus magna. Aliquam vestibulum morbi blandit cursus. Velit laoreet id donec ultrices tincidunt arcu non sodales. Sed tempus urna et pharetra. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. In iaculis nunc sed augue. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Ac turpis egestas sed tempus urna. Velit laoreet id donec ultrices tincidunt arcu. Porta lorem mollis aliquam ut. Posuere morbi leo urna molestie.

Quisque id diam vel quam. Gravida arcu ac tortor dignissim convallis. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Dictum non consectetur a erat. Felis donec et odio pellentesque diam volutpat. Auctor urna nunc id cursus. Vitae tempus quam pellentesque nec nam. Est ullamcorper eget nulla facilisi etiam dignissim. Gravida cum sociis natoque penatibus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Pharetra sit amet aliquam id diam maecenas ultricies. Velit egestas dui id ornare. Tortor dignissim convallis aenean et tortor at risus viverra. Eget mauris pharetra et ultrices neque ornare aenean. Dictum fusce ut placerat orci nulla pellentesque dignissim enim.

Fermentum odio eu feugiat pretium nibh ipsum. Erat velit scelerisque in dictum non consectetur a erat. Erat velit scelerisque in dictum non consectetur a erat nam. Felis eget velit aliquet sagittis id consectetur purus ut. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Etiam erat velit scelerisque in. Netus et malesuada fames ac turpis egestas sed. Semper risus in hendrerit gravida rutrum quisque. Varius duis at consectetur lorem donec massa sapien faucibus et. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Vitae suscipit tellus mauris a diam maecenas sed enim ut.

Ornare lectus sit amet est placerat. Erat nam at lectus urna. Semper viverra nam libero justo. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Eget lorem dolor sed viverra ipsum nunc. Vitae semper quis lectus nulla at. Consectetur libero id faucibus nisl tincidunt eget nullam non. Erat velit scelerisque in dictum non consectetur a. Sed adipiscing diam donec adipiscing tristique risus. Augue eget arcu dictum varius duis at consectetur. Aliquet risus feugiat in ante metus dictum at tempor commodo. Non odio euismod lacinia at quis risus sed. Arcu bibendum at varius vel pharetra vel. Feugiat vivamus at augue eget. Enim tortor at auctor urna nunc id cursus metus. At elementum eu facilisis sed odio.

Lectus nulla at volutpat diam. At lectus urna duis convallis. Amet volutpat consequat mauris nunc congue nisi vitae. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Est ante in nibh mauris cursus mattis molestie a iaculis. Rhoncus dolor purus non enim praesent elementum facilisis. Urna id volutpat lacus laoreet non curabitur gravida arcu. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Adipiscing enim eu turpis egestas pretium aenean pharetra. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Elementum curabitur vitae nunc sed velit dignissim sodales. Ut porttitor leo a diam sollicitudin tempor id. A iaculis at erat pellentesque. Scelerisque fermentum dui faucibus in. Leo urna molestie at elementum eu facilisis. Lacus luctus accumsan tortor posuere. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Turpis nunc eget lorem dolor sed viverra.

Sit amet porttitor eget dolor morbi non arcu. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Volutpat commodo sed egestas egestas fringilla phasellus. Nunc sed velit dignissim sodales ut eu sem. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Ultrices eros in cursus turpis massa tincidunt dui ut. Consequat ac felis donec et. Maecenas ultricies mi eget mauris pharetra et. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Nibh cras pulvinar mattis nunc sed blandit libero. Quam viverra orci sagittis eu volutpat odio facilisis. Aliquet porttitor lacus luctus accumsan tortor.

Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Egestas sed sed risus pretium quam vulputate dignissim. Lacinia at quis risus sed vulputate odio ut. Convallis convallis tellus id interdum velit laoreet id. Id semper risus in hendrerit gravida rutrum quisque non tellus. Sit amet commodo nulla facilisi. Pellentesque elit eget gravida cum sociis natoque penatibus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Augue lacus viverra vitae congue. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Curabitur vitae nunc sed velit dignissim. Velit laoreet id donec ultrices tincidunt arcu. Fringilla ut morbi tincidunt augue interdum velit. Porta nibh venenatis cras sed. Sollicitudin nibh sit amet commodo. Maecenas accumsan lacus vel facilisis volutpat est. Volutpat lacus laoreet non curabitur. Sit amet venenatis urna cursus eget nunc scelerisque. Mi tempus imperdiet nulla malesuada pellentesque. In fermentum posuere urna nec tincidunt praesent.

Posuere morbi leo urna molestie at elementum eu facilisis sed. Tortor vitae purus faucibus ornare suspendisse. Et magnis dis parturient montes. In iaculis nunc sed augue lacus viverra vitae. Lobortis elementum nibh tellus molestie nunc non blandit massa. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Non enim praesent elementum facilisis. Accumsan tortor posuere ac ut consequat semper. Morbi tristique senectus et netus et malesuada fames ac. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Purus in massa tempor nec feugiat nisl pretium fusce id. Quam pellentesque nec nam aliquam sem et.

Vulputate mi sit amet mauris commodo. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Ornare quam viverra orci sagittis eu. Platea dictumst quisque sagittis purus. Semper auctor neque vitae tempus quam. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Dui vivamus arcu felis bibendum ut tristique et. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. At consectetur lorem donec massa sapien faucibus et molestie. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Sodales neque sodales ut etiam. Morbi enim nunc faucibus a pellentesque sit amet. Imperdiet dui accumsan sit amet nulla. Congue nisi vitae suscipit tellus.

Sagittis purus sit amet volutpat. Eleifend donec pretium vulputate sapien. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Elementum eu facilisis sed odio. Metus aliquam eleifend mi in nulla posuere. Nec tincidunt praesent semper feugiat nibh sed. Fermentum et sollicitudin ac orci phasellus egestas. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Vitae sapien pellentesque habitant morbi. Sit amet dictum sit amet justo donec enim diam vulputate.

Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Praesent tristique magna sit amet. Nisl vel pretium lectus quam id leo in vitae. Neque vitae tempus quam pellentesque nec nam aliquam. Neque vitae tempus quam pellentesque nec nam. Posuere morbi leo urna molestie at. Tempor nec feugiat nisl pretium fusce id velit ut. Diam maecenas ultricies mi eget mauris pharetra. Mattis aliquam faucibus purus in massa tempor nec feugiat. Rhoncus dolor purus non enim praesent elementum facilisis. Dictumst quisque sagittis purus sit amet volutpat. Facilisis gravida neque convallis a cras semper auctor. Mattis aliquam faucibus purus in massa tempor. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Aliquam sem fringilla ut morbi tincidunt.

Est lorem ipsum dolor sit amet consectetur adipiscing. Gravida neque convallis a cras semper. Aliquam ultrices sagittis orci a scelerisque. Luctus venenatis lectus magna fringilla. Urna nunc id cursus metus aliquam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Leo vel fringilla est ullamcorper. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Aliquam purus sit amet luctus venenatis lectus magna. Ac felis donec et odio pellentesque. Id diam vel quam elementum pulvinar etiam non quam lacus.

Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Ac felis donec et odio. Etiam erat velit scelerisque in dictum. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Ut aliquam purus sit amet luctus venenatis lectus magna. Viverra orci sagittis eu volutpat. Mauris cursus mattis molestie a iaculis at erat. Odio morbi quis commodo odio aenean sed adipiscing diam. Mattis pellentesque id nibh tortor id aliquet lectus proin. Aliquam ut porttitor leo a.

Tellus at urna condimentum mattis pellentesque id. Consequat id porta nibh venenatis cras sed felis. Eros in cursus turpis massa. Feugiat nisl pretium fusce id velit ut. Sodales ut etiam sit amet nisl purus in mollis. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Enim diam vulputate ut pharetra. Diam quam nulla porttitor massa id neque aliquam vestibulum. At tellus at urna condimentum mattis pellentesque. Sit amet consectetur adipiscing elit duis tristique. Id venenatis a condimentum vitae sapien pellentesque.

At auctor urna nunc id cursus metus. Fermentum posuere urna nec tincidunt praesent semper. Varius duis at consectetur lorem donec. Nam libero justo laoreet sit. Risus feugiat in ante metus dictum at tempor commodo. Sit amet consectetur adipiscing elit pellentesque. Phasellus egestas tellus rutrum tellus pellentesque eu. Dictum non consectetur a erat nam at. Neque vitae tempus quam pellentesque nec nam. Leo in vitae turpis massa sed elementum. Fermentum posuere urna nec tincidunt. Mi sit amet mauris commodo quis imperdiet massa. Risus nec feugiat in fermentum. Dis parturient montes nascetur ridiculus mus. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Erat velit scelerisque in dictum non consectetur. Molestie a iaculis at erat pellentesque adipiscing commodo elit at.

Nec feugiat nisl pretium fusce id velit ut tortor. Ut eu sem integer vitae justo eget magna fermentum iaculis. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Ut venenatis tellus in metus vulputate eu scelerisque felis. Dolor sed viverra ipsum nunc aliquet bibendum enim. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Eget gravida cum sociis natoque penatibus et. Diam in arcu cursus euismod. In iaculis nunc sed augue lacus. Lectus magna fringilla urna porttitor. Tortor at auctor urna nunc id. Arcu ac tortor dignissim convallis aenean. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Diam phasellus vestibulum lorem sed.

Eget mauris pharetra et ultrices. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Facilisi etiam dignissim diam quis enim lobortis. Ut sem viverra aliquet eget. Tempus iaculis urna id volutpat lacus. Sed sed risus pretium quam vulputate dignissim suspendisse in. Elementum integer enim neque volutpat ac tincidunt. Vel eros donec ac odio. Eget gravida cum sociis natoque penatibus et magnis. Tincidunt id aliquet risus feugiat in. Orci eu lobortis elementum nibh tellus molestie nunc. Nisl tincidunt eget nullam non nisi est. Non sodales neque sodales ut etiam. Sit amet venenatis urna cursus eget.

Adipiscing elit duis tristique sollicitudin. Condimentum lacinia quis vel eros donec ac odio tempor. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Morbi blandit cursus risus at ultrices mi tempus. Tristique magna sit amet purus gravida. Accumsan lacus vel facilisis volutpat est velit egestas dui. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Id aliquet risus feugiat in ante. Congue nisi vitae suscipit tellus mauris. Eu nisl nunc mi ipsum. Eu turpis egestas pretium aenean pharetra magna ac placerat. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Nullam eget felis eget nunc lobortis mattis aliquam. Magna fringilla urna porttitor rhoncus dolor. Cum sociis natoque penatibus et. Arcu dictum varius duis at consectetur lorem donec.

Id aliquet lectus proin nibh nisl condimentum id venenatis a. Ut eu sem integer vitae justo. Ipsum consequat nisl vel pretium lectus quam id. Sit amet nisl suscipit adipiscing bibendum est. Turpis tincidunt id aliquet risus. Tellus id interdum velit laoreet id donec ultrices. Urna nec tincidunt praesent semper feugiat nibh. Hac habitasse platea dictumst quisque sagittis purus sit. Donec massa sapien faucibus et molestie ac. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ac ut consequat semper viverra. Mi bibendum neque egestas congue quisque. Amet cursus sit amet dictum sit. Orci phasellus egestas tellus rutrum tellus. Et tortor at risus viverra adipiscing at in tellus. Sit amet nisl purus in mollis nunc sed.

Ut faucibus pulvinar elementum integer enim neque. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Nunc mattis enim ut tellus elementum sagittis vitae. Velit sed ullamcorper morbi tincidunt ornare. Arcu ac tortor dignissim convallis. Fermentum iaculis eu non diam phasellus vestibulum. Tellus in metus vulputate eu scelerisque. Tincidunt arcu non sodales neque sodales ut etiam sit. Eget mi proin sed libero. Imperdiet sed euismod nisi porta lorem mollis. Condimentum id venenatis a condimentum vitae. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Suspendisse faucibus interdum posuere lorem ipsum dolor. Suspendisse faucibus interdum posuere lorem. Non quam lacus suspendisse faucibus interdum. Fusce ut placerat orci nulla pellentesque. Curabitur gravida arcu ac tortor. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Arcu non odio euismod lacinia at quis.

Pretium vulputate sapien nec sagittis aliquam malesuada. Ullamcorper a lacus vestibulum sed arcu. Egestas purus viverra accumsan in nisl. Vitae semper quis lectus nulla at. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Sodales neque sodales ut etiam sit. Leo duis ut diam quam nulla porttitor massa. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam quis enim lobortis scelerisque fermentum. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Enim nulla aliquet porttitor lacus luctus accumsan. Aliquam ut porttitor leo a diam sollicitudin tempor. Nunc mattis enim ut tellus elementum sagittis. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Diam maecenas ultricies mi eget. Adipiscing elit ut aliquam purus. Lacus laoreet non curabitur gravida. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Lacus sed viverra tellus in hac.

Tincidunt vitae semper quis lectus nulla at volutpat diam. Sed risus pretium quam vulputate dignissim suspendisse in. Massa tempor nec feugiat nisl pretium fusce id. Penatibus et magnis dis parturient. Elit pellentesque habitant morbi tristique. Nunc pulvinar sapien et ligula ullamcorper malesuada. Quis auctor elit sed vulputate. Egestas dui id ornare arcu odio ut. Bibendum arcu vitae elementum curabitur vitae nunc. Dui faucibus in ornare quam viverra orci sagittis eu. Velit scelerisque in dictum non consectetur a erat. Tellus elementum sagittis vitae et leo. Gravida arcu ac tortor dignissim convallis aenean et tortor.

Augue ut lectus arcu bibendum at varius vel pharetra. Tristique senectus et netus et malesuada fames ac. Ultricies leo integer malesuada nunc vel risus commodo. Tristique senectus et netus et. Auctor neque vitae tempus quam pellentesque nec nam. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Nisi vitae suscipit tellus mauris a. Vulputate ut pharetra sit amet aliquam id. Nisl vel pretium lectus quam id. Morbi tristique senectus et netus et malesuada fames ac turpis. Ut enim blandit volutpat maecenas volutpat blandit. Aenean vel elit scelerisque mauris. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Volutpat odio facilisis mauris sit amet massa vitae tortor. In vitae turpis massa sed elementum tempus. Dui vivamus arcu felis bibendum ut.

Enim nec dui nunc mattis enim ut tellus elementum sagittis. Enim nec dui nunc mattis enim ut tellus elementum. Elementum integer enim neque volutpat ac tincidunt vitae. Pellentesque elit eget gravida cum sociis natoque penatibus. Etiam sit amet nisl purus. Et tortor consequat id porta nibh venenatis cras. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Purus sit amet luctus venenatis lectus magna. Sed id semper risus in. At lectus urna duis convallis convallis tellus. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Magna fringilla urna porttitor rhoncus dolor purus. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Mauris cursus mattis molestie a iaculis at erat pellentesque.

Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Accumsan tortor posuere ac ut consequat semper. Volutpat commodo sed egestas egestas fringilla phasellus. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. In egestas erat imperdiet sed euismod. Amet risus nullam eget felis eget nunc. Accumsan lacus vel facilisis volutpat. Orci eu lobortis elementum nibh. Eget est lorem ipsum dolor sit amet consectetur. Malesuada fames ac turpis egestas maecenas. Posuere morbi leo urna molestie at. Scelerisque purus semper eget duis at. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Venenatis a condimentum vitae sapien pellentesque. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Vulputate eu scelerisque felis imperdiet. Quis eleifend quam adipiscing vitae proin. Nisl purus in mollis nunc sed. Consectetur lorem donec massa sapien faucibus et molestie ac.
`,
    description: 'There is finally a punchline offered to a worldly and dragging joke; The American Judicial System',
    genres,
    imgAlt: 'There is finally a punchline offered to a worldly and dragging joke; The American Judicial System',
    imgSrc: 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3NpbXBzb25zLW9yaWcuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0&#x3D;',
    title: 'The Greatest Mistrial The World Had Ever Seen'
  };
  hydrateRoot(
    mountingEl,
      <StoryPage {...props} />
  );
}

if (process.env.NODE_ENV === 'production') {
  inject({ mode: 'production' });
}

mount();
  
