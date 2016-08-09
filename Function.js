//=========================================================================================
//Create Database
//=========================================================================================
var db;

function DBCreation(){
		db = openDatabase('DPDB','1.0','Database of Digital Planet', 2 * 1024 * 1024);
			db.transaction(function (txs){
				//=========================================================================================
				//Create Table
				//=========================================================================================
				txs.executeSql('Create table if not exists Plant (id unique, name TEXT, speciesId TEXT, TypeId Text, ColorId TEXT, Brief_describe TEXT, describe TEXT, img TEXT, collection TEXT)');
				txs.executeSql('Create table if not exists Color (ColorId unique, Color TEXT)');
				txs.executeSql('Create table if not exists Species (speciesId unique, species TEXT)');
				txs.executeSql('Create table if not exists Type (TypeId unique, Type TEXT)');
				txs.executeSql('Create table if not exists Record(RecordId unique, RecordTitle TEXT, Student_name TEXT, date_month TEXT, date_day TEXT, date_year TEXT, VisitSite TEXT, Plant_name TEXT, DescText TEXT, Location TEXT, PhotoData TEXT,Deleted TEXT)');	
				//=========================================================================================
				//Insert Plant Data
				//=========================================================================================
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img, collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['1','Alnus glutinosa', '1', '1', '1', 'Alnus glutinosa (English: Black Alder, European Alder or Common Alder) is an alder native to most of Europe','<p>Alnus glutinosa is a tree that thrives in moist soils, and grows under favourable circumstances to a height of 20每30 m, exceptionally up to 37 m,though often less. It is characterized by its 5每10 cm short-stalked rounded leaves 6每12 cm long, becoming wedge-shaped at the base and with a slightly toothed margin. When young they are somewhat glutinous, whence the specific name, becoming later a glossy dark green. As with some other plants, growing near water it keeps its leaves longer than do trees in drier situations. The glossy green foliage lasts after other trees have put on the red or brown of autumn, which renders it valuable for landscape effect. As the Latin name glutinosa implies, the buds and young leaves are slightly sticky with a resinous gum.</p>','images/Alnus.jpg','']);	
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img, collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['2','Malus sylvestris', '2', '1', '2', 'Malus sylvestris, the European wild apple, is a species of Malus (crabapple), native to Europe from as far south as Spain, Italy and Greece to as far north as Scandinavia and Russia','<p>Malus sylvestris, the European wild apple, is a species of Malus (crabapple), native to Europe from as far south as Spain, Italy and Greece to as far north as Scandinavia and Russia. Its scientific name means "forest apple", and the truly wild tree has thorns. In the past, M. sylvestris was thought to be an important ancestor of the cultivated apples (M. domestica), but these have now been shown to be primarily derived from the central Asian species M. sieversii.[1] However, another recent DNA analysis[2] showed that M. sylvestris has contributed to the ancestry of M. domestica.</p>','images/Malussylvestris.jpg','']);
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img,collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['3','Fraxinus excelsior', '3', '1', '1', 'Fraxinus excelsior (Ash; also European Ash or Common Ash on occasion to distinguish it from other ash species), is a species of Fraxinus native to most of Europe with the exception of northern Scandinavia and southern Iberia, and also southwestern Asia from northern Turkey east to the Caucasus and Alborz mountains.','<p>It is a large deciduous tree growing to 20每35 m (exceptionally to 46 m) tall with a trunk up to 2 m (exceptionally to 3.5 m) diameter, with a tall, domed crown. </p><p>The bark is smooth and pale grey on young trees, becoming thick and vertically fissured on old trees. The shoots are stout, greenish-grey, with jet black buds (which distinguish it from most other ash species, which have grey or brown buds). The leaves are 20每35 cm long, pinnate compound, with 7-13 leaflets, the leaflets 3每12 cm long and 0.8每3 cm broad, sessile on the leaf rachis, and with a serrated margin.</p><p> The leaves are often among the last to open in spring, and the first to fall in autumn if an early frost strikes; they have no marked autumn colour, often falling dull green. The flowers open before the leaves, the female flowers being somewhat longer than the male flowers; they are dark purple, and without petals, and are wind-pollinated.</p> <p>Both male and female flowers can occur on the same tree, but it is more common to find all male and all female trees; a tree that is all male one year can produce female flowers the next, and similarly a female tree can become male. The fruit is a samara 2.5-4.5 cm long and 5每8 mm broad, often hanging in bunches through the winter; they are often called ash keys.</p><p>If the fruit is gathered and planted when it is still green and not fully ripe, it will germinate straightaway, however once the fruit is brown and fully ripe, it will not germinate until 18 months after sowing.</p><p>European Ash rarely exceeds 250 years of age. However there are numerous ones estimated between 200 and 250 years old and there are a couple over 250. The largest is in Clapton Court, England and is 9 m (29 ft) in girth. There are several examples over 4.5 metres (15 feet) in Derbyshire alone.</p>','images/Fraxinusexcelsior.jpg','']);
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img,collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['4','Betula pubescens', '4', '1', '1', 'Betula pubescens (syn. Betula alba; Downy Birch; also known as White Birch, European White Birch or Hairy Birch) is a species of birch, native and abundant throughout northern Europe, Iceland, northern Asia and also Greenland.','<p>It is a deciduous tree growing to 10每20 m tall (rarely to 27 m), with a slender crown and a trunk up to 70 cm (exceptionally 1 m) diameter, with smooth but dull grey-white bark finely marked with dark horizontal lenticels. The shoots are grey-brown and finely downy. The leaves are ovate-acute, 2每5 cm long and 1.5-4.5 cm broad, with a finely serrated margin. The flowers are wind pollinated catkins, produced in early spring before the leaves. The fruit is a pendulous cylindrical aggregate 1每4 cm long and 5每7 mm diameter, which disintegrates at maturity releasing the individual seeds; these are 2 mm long with two small wings along the side.</p> <p>It is closely related to, and often confused with, the Silver Birch (B. pendula). Many North American texts treat the two species as conspecific (and cause confusion by combining the Downy Birchs alternative vernacular name "White Birch", with the scientific name B. pendula of the other species), but they are regarded as distinct species throughout Europe.</p> <p>Downy Birch can be distinguished from Silver Birch in having smooth, downy shoots, which are hairless and warty in Silver Birch.</p><p> The bark of the Downy Birch is a dull greyish white, whereas the Silver Birch has striking white papery bark with black fissures. The leaf margins also differ, finely serrated in Downy Birch, coarsely double-toothed in Silver Birch. They are also distinguished cytologically, Silver Birch being diploid (with two sets of chromosomes), whereas Downy Birch is tetraploid (four sets of chromosomes). The two have differences in habitat requirements, with Downy Birch more common on wet, poorly drained sites such as clays and peat bogs, and Silver Birch found mainly on dry, sandy soils.</p>','images/Betulapubescens.jpg','']);
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img,collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['5','Betula pendula', '4', '1', '1', 'Betula pendula (Silver Birch) is a widespread European birch, though in southern Europe it is only found at higher altitudes.','<p>It is a medium-sized deciduous tree, typically reaching 15每25 m tall (exceptionally up to 39 m), with a slender trunk usually under 40 cm diameter (exceptionally to 1 m diameter), and a crown of arched branches with drooping branchlets. The bark is white, often with black diamond-shaped marks or larger patches, particularly at the base. The shoots are rough with small warts, and hairless, and the leaves 3每7 cm long, triangular with a broad base and pointed tip, and coarsely double-toothed serrated margins. The flowers are wind-pollinated catkins, produced before the leaves in early spring, the small (1每2 mm) winged seeds ripening in late summer on pendulous, cylindrical catkins 2每4 cm long and 7 mm broad</p><p>It is distinguished from the related Downy Birch (B. pubescens, the other common European birch) in having hairless, warty shoots (hairy and without warts in Downy Birch), more triangular leaves with double serration on the margins (more ovoid and with single serrations in Downy Birch), and whiter bark often with scattered black fissures (greyer, less fissured, in Downy Birch). It is also distinguished cytologically, Silver Birch being diploid (with two sets of chromosomes), whereas Downy Birch is tetraploid (four sets of chromosomes). Hybrids between the two are known, but are very rare, and being triploid, are sterile</p><p>The two have differences in habitat requirements, with Silver Birch found mainly on dry, sandy soils, and Downy Birch more common on wet, poorly drained sites such as clay soils and peat bogs. Silver birch also demands slightly more summer warmth than does Downy birch, which is significant in the cooler parts of Europe. Many North American texts treat the two species as conspecific (and cause confusion by combining the Downy Birch alternative vernacular name "White Birch", with the scientific name B. pendula of the other species), but they are regarded as distinct species throughout Europe.</p><p>It commonly grows with the mycorrhizal fungus Amanita muscaria in a mutualistic relationship. This applies particularly to acidic or nutrient poor soils. Other mycorrhizal associates include Leccinum scabrum and Cantharellus cibarius. Old trees are often killed by the decay fungus Piptoporus betulinus, and the branches often have witch brooms caused by the fungus Taphrina betulina</p>','images/Betulapendula.jpg','']);
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img,collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['6','Fagus sylvatica', '5', '1', '1', 'Fagus sylvatica, the European Beech or Common Beech, is a deciduous tree belonging to the beech family Fagaceae.','<p>The natural range extends from southern Sweden (with some isolated locations in southern Norway) to central Italy, west to France, southern England, northern Portugal, and central Spain, and east to northwest Turkey, where it intergrades with the Oriental Beech (F. orientalis), which replaces it further east. In the Balkans, it shows some hybridisation with Oriental Beech; these hybrid trees are named Fagus x taurica. In the southern part of its range around the Mediterranean, it grows only in mountain forests, at 600-1,800 m altitude. Although often regarded as native in southern England, recent evidence suggests that it did not arrive in England until about 4000 BC, or 2,000 years after the English Channel formed after the ice ages; it could have been an early introduction by Stone age man, who used the nuts for food.</p><p>The beech is classified as a native in the south of England and as a non-native in the north where it is often removed from "native" woods.</p><p>Localised pollen records have been recorded in the North of England from the Iron Age by Sir Harry Godwin. Changing climatic conditions may put beech populations in southern England under increased stress and while it may not be possible to maintain the current levels of beech in some sites it is thought that conditions for beech in north-west England will remain favourable or even improve. It is often planted in Britain.</p>','images/Fagussylvatica.jpg','']);
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img,collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['7','Prunus spinosa', '6', '1', '3', 'Prunus spinosa (blackthorn or sloe) is a species of Prunus native to Europe, western Asia, and locally in northwest Africa.It is also locally naturalised in New Zealand and eastern North America','<p>Prunus spinosa is a deciduous large shrub or small tree growing to 5 m tall, with blackish bark and dense, stiff, spiny branches. The leaves are oval, 2每4.5 cm long and 1.2每2 cm broad, with a serrated margin. The flowers are 1.5 cm diameter, with five creamy-white petals; they are produced shortly before the leaves in early spring, and are hermaphroditic and insect-pollinated. The fruit, called a "sloe", is a drupe 10每12 millimetres (0.39每0.47 in) in diameter, black with a purple-blue waxy bloom, ripening in autumn, and harvested 〞 traditionally, at least in the UK, in October or November after the first frosts. Sloes are thin-fleshed, with a very strongly astringent flavour when fresh.</p><p>Prunus spinosa is frequently confused with the related P. cerasifera (cherry plum), particularly in early spring when the latter starts flowering somewhat earlier than P. spinosa. They can be distinguished by flower colour, creamy white in P. spinosa, pure white in P. cerasifera. They can also be distinguished in winter by the more shrubby habit with stiffer, wider-angled branches of P. spinosa; in summer by the relatively narrower leaves of P. spinosa, more than twice as long as broad; and in autumn by the colour of the fruit skin 〞 purplish-black in P. spinosa and yellow or red in P. cerasifera.</p>','images/Prunusspinosa.jpg','']);
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img,collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['8','Prunus padus', '6', '1', '2', 'runus padus, known as Bird Cherry or Hackberry, is a species of cherry, native to northern Europe and northern Asia.','<p>Prunus padus, known as Bird Cherry or Hackberry, is a species of cherry, native to northern Europe and northern Asia. It is a deciduous small tree or large shrub, 8每16 m tall, which grows north of the Arctic Circle in Norway, Sweden, Finland and Russia. It is the type species of the subgenus Padus, which have flowers in racemes.</p>','images/Prunuspadus.jpg','']);
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img,collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['9','Prunus avium', '6', '1', '4', 'Prunus avium, commonly called wild cherry,sweet cherry,bird cherry,or gean,is a species of cherry native to Europe, western Turkey, northwestern Africa','<p>Prunus avium is a deciduous tree growing to 15每32 m (50-100 ft) tall, with a trunk up to 1.5 m (5 ft) in diameter. Young trees show strong apical dominance with a straight trunk and symmetrical conical crown, becoming rounded to irregular on old trees.</p><p>The bark is smooth purplish-brown with prominent horizontal grey-brown lenticels on young trees, becoming thick dark blackish-brown and fissured on old trees. The leaves are alternate, simple ovoid-acute, 7每14 cm (3每6 in) long and 4每7 cm (2每3 in) broad, glabrous matt or sub-shiny green above, variably finely downy beneath, with a serrated margin and an acuminate tip, with a green or reddish petiole 2每3.5 cm (0.8-1.4 in) long bearing two to five small red glands</p>','images/Prunusavium.jpg','']);
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img,collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['10','Wych Elm', '7', '1', '1', 'Wych Elm is a subspecies of the Field Elm native to southern Europe and Asia Minor including Iran.','<p>A deciduous tree that once commonly grew < 35 m tall, its Latin synonym carpinifolia alluding to the superficial similarity of the leaves to those of Hornbeam Carpinus sp., while the common names contrast the smooth upper surface and narrowness of the leaves with those of the Wych Elm, which are rough and broad.[1][2] The apetalous perfect wind-pollinated flowers, and fruit (samarae) are very similar to those of the species.</p>','images/WychElm.jpg','']);
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img,collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['11','Rowans and Whitebeams', '8', '1', '1', 'Sorbus torminalis,sometimes known as the Chequer(s) Tree or Checker(s) Tree, is a species of Sorbus native to Europe from England and Wales east to Denmark and Poland, south to northwest Africa, and southeast to southwest Asia from Asia Minor to the Caucasus and Alborz mountains.','<p>It is a medium-sized deciduous tree growing to 15每25 m tall, with a trunk up to 1.3 m diameter. The bark is smooth and greyish, but flaky, peeling away in squarish plates to reveal darker brown layers. The leaves are 6每14 cm long and broad with a 2.5每5 cm petiole, dark green on both sides, with five to nine acute lobes; the basal pair of lobes are spreading, the rest more forward-pointing and decreasing in size to the leaf apex, and with finely toothed margins;</p><p>the undersides have small hairs when young, but both sides are smooth and shiny when older; the autumn colour is yellow to red-brown. The flowers are 10每15 mm diameter, with five white petals and 20 creamy-white stamens; they are produced in corymbs 5每12 cm diameter in late spring to early summer, and are hermaphrodite and insect pollinated. The fruit is a globose to ovoid pome 10每15 mm diameter, greenish to russet or brown, patterned with small pale lenticel spots when mature in mid to late autumn.</p>','images/RowansandWhitebeams.jpg','']);
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img,collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['12','Sorbus domestica', '8', '1', '1', 'Sorbus domestica (Service Tree, or sometimes True Service Tree to distinguish it from the Wild Service Tree; syn. Cormus domestica (L.) Spach) is a species of Sorbus native to western, central and southern Europe, northwest Africa (Atlas Mountains), and southwest Asia (east to the Caucasus).','<p>It is a deciduous tree growing to 15每20 m (rarely to 30 m) tall with a trunk up to 1 m diameter, though can also be a shrub 2每3 m tall on exposed sites. The bark is brown, smooth on young trees, becoming fissured and flaky on old trees.</p><p>The winter buds are green, with a sticky resinous coating. The leaves are 15每25 cm long, pinnate with 13-21 leaflets 3每6 cm long and 1 cm broad, with a bluntly acute apex, and a serrated margin on the outer half or two thirds of the leaflet. The flowers are 13每18 mm diameter, with five white petals and 20 creamy-white stamens; they are produced in corymbs 10每14 cm diameter in late spring, and are hermaphrodite and insect pollinated.</p><p>The fruit is a pome 2每3 cm long, greenish-brown, often tinged red on the side exposed to sunlight; it can be either apple-shaped (f. pomifera (Hayne) Rehder) or pear-shaped (f. pyrifera (Hayne) Rehder).</p>','images/Sorbusdomestica.jpg','']);
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img,collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['13','Sorbus aucuparia', '8', '1', '4', 'Sorbus aucuparia (Rowan, European Rowan, Mountain-ash, or European mountain-ash), is a species of the genus Sorbus, native to most of Europe except for the far south, and northern Asia.','<p>It is a small to medium-sized deciduous tree typically growing to 8每10 m tall, more rarely 20 m, and exceptionally to 28 m.</p><p>The bark is smooth, silvery grey of young trees, becoming scaly pale grey-brown and occasionally fissured on old trees.</p><p>The shoots are green and variably hairy at first, becoming grey-brown and hairless; the buds are conspicuous, purple-brown, and often densely hairy.</p><p>The leaves are pinnate, 10每22 cm long and 6-12 cm broad, with 9每19 (most often 13每15) leaflets; each leaflet is 3每7 cm long and 15每23 mm broad, with a coarsely serrated margin; they are variably hairy, particularly the petiole and leaf veins on the underside.</p><p>the hermaphrodite flowers are produced in large terminal corymbs 8每15 cm diameter with up to 250 flowers, the individual flowers 1 cm diameter, with five creamy-white petals, and are insect pollinated. The fruit is a small pome 6每9 mm (rarely up to 14 mm) diameter, green at first, ripening bright red in late summer, and containing up to eight (most commonly two) small seeds.</p>','images/Sorbusaucuparia.jpg','']);
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img,collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['14','Salix triandra', '9', '1', '1', 'Salix triandra (Almond Willow or Almond-leaved Willow) is a species of willow native to Europe and western and central Asia, from southeastern England east to Lake Baikal, and south to Spain and the Caucasus and Alborz mountains.','<p>It is a deciduous shrub or small tree growing to 10 m tall, usually multistemmed, with an irregular, often leaning crown.</p><p>The bark is smooth grey-brown at first, becoming scaly on older stems with large scales exfoliating (like a plane tree) to leave orange-brown patches. The leaves are broad lanceolate, 4-11 cm long and 1-3 cm wide, with a serrated margin;</p><p> they are dull dark green above and green to glaucous-green below, with a 1每2 cm petiole with two conspicuous basal stipules.</p><p>The flowers are produced in catkins in early spring at the same time as the new leaves, and pollinated by insects. They are dioecious, with male and female catkins on separate trees; the male catkins are 2.5每8 cm long, the female catkins 2每4 cm long.</p><p>The male flowers have three stamens, a useful identification feature with most other willows having two or five stamens.</p>','images/Salixtriandra.jpg','']);
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img,collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['15','Salix alba', '9', '1', '1', 'Salix alba (White Willow) is a species of willow native to Europe and western and central Asia.The name derives from the white tone to the undersides of the leaves.','<p>It is a medium-size to large deciduous tree growing up to 10每30 m tall, with a trunk up to 1 m diameter and an irregular, often-leaning crown.</p><p>The bark is grey-brown, deeply fissured in older trees. The shoots in the typical species are grey-brown to green-brown.</p><p>The leaves are paler than most other willows, due to a covering of very fine silky white hairs, in particular on the underside; they are 5每10 cm long and 0.5每1.5 cm wide. The flowers are produced in catkins in early spring, and pollinated by insects.</p><p>It is dioecious, with male and female catkins on separate trees; the male catkins are 4每5 cm long, the female catkins 3每4 cm long at pollination, lengthening as the fruit matures. When mature in mid summer, the female catkins comprise numerous small (4 mm) capsules each containing numerous minute seeds embedded in white down, which aids wind dispersal.</p>','images/Salixalba.jpg','']);
				txs.executeSql('insert into Plant (id,name, speciesId, TypeId, ColorId, Brief_describe, describe, img,collection) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['16','Salix fragilis', '9', '1', '1', 'Salix fragilis (Crack Willow) is a species of willow native to Europe and western Asia, usually growing beside rivers.','<p>It is a medium-sized to large deciduous tree, which grows rapidly to 10每20 m (rarely to 29 m) tall, with a trunk up to 1 m diameter and an irregular, often leaning crown.</p><p>The bark is grey-brown, coarsely fissured in older trees. The leaves are bright green, 9每15 cm long and 1.5每3 cm wide, with a finely serrated margin; they are very finely hairy at first in spring, but soon become hairless.</p><p>The flowers are produced in catkins in early spring, and pollinated by insects. They are dioecious, with male and female catkins on separate trees; the male catkins are 4每6 cm long,</p><p>the female catkins also 4每6 cm long, with the individual flowers having either one or two nectaries.</p>','images/Salixfragilis.jpg','']);
	 
				//=========================================================================================
				//Insert Color Data
				//=========================================================================================
				txs.executeSql('insert into Color (ColorId,Color) values(?, ?)', ['1','Green']);
				txs.executeSql('insert into Color (ColorId,Color) values(?, ?)', ['2','White']);
				txs.executeSql('insert into Color (ColorId,Color) values(?, ?)', ['3','Blue']);
				txs.executeSql('insert into Color (ColorId,Color) values(?, ?)', ['4','Red']);
	
				//=========================================================================================
				//Insert Speices Data
				//=========================================================================================
				txs.executeSql('insert into Species (speciesId,species) values(?, ?)', ['1','Alders']);
				txs.executeSql('insert into Species (speciesId,species) values(?, ?)', ['2','Apples']);
				txs.executeSql('insert into Species (speciesId,species) values(?, ?)', ['3','Ashes']);
				txs.executeSql('insert into Species (speciesId,species) values(?, ?)', ['4','Birches']);
				txs.executeSql('insert into Species (speciesId,species) values(?, ?)', ['5','Beeches']);
				txs.executeSql('insert into Species (speciesId,species) values(?, ?)', ['6','Cherries and Plums']);
				txs.executeSql('insert into Species (speciesId,species) values(?, ?)', ['7','Elms']);
				txs.executeSql('insert into Species (speciesId,species) values(?, ?)', ['8','Rowans and Whitebeams']);
				txs.executeSql('insert into Species (speciesId,species) values(?, ?)', ['9','Willows']);
	
				//=========================================================================================
				//Insert Type Data
				//=========================================================================================
				txs.executeSql('insert into Type (TypeId,Type) values(?, ?)', ['1','Tree']);
				txs.executeSql('insert into Type (TypeId,Type) values(?, ?)', ['2','Flower']);
			});
	}

//=========================================================================================
//Run the functions When the application setup
//=========================================================================================
$(document).ready(function(){
	DBCreation();
	Display_Data();	
	Set_Category_Species();
	Set_Category_Color();
	Set_Category_Type();
	Display_CollectionData();
	Display_RecordData();
	Display_JunkbucketData();
	//=====================================================================================
	$("#CategoryList").hide();
	$("#ColorList").hide();
	$("#TypeList").hide();
});

//=========================================================================================
//Event
//=========================================================================================
$(function(){
	//=====================================================================================
	//Click Event
	//=====================================================================================
	$("#SelectPlant").live("click",function(){
		GetInfoById($(this).data("idKeeper"));
		GetInfoByName($(this).data("NameKeeper"));
	});
	
	$("#CategoryPlant").live("click",function(){
		GetInfoByIdForCategory($(this).data("idKeeper"));
	});
	
	$("#SelectRecord").live("click",function(){
		GetRecordInfoById($(this).data("idKeeper"));
	});
	//=====================================================================================
	//Collect Event
	//=====================================================================================
	$("#Collect").click(function(){
		AddCollection($("#DetailName").text());
		$('#ListofCollection ul li:not(:first)').remove();
		$('#ListofPlant ul li:not(:first)').remove();
		Display_CollectionData();
		Display_Data();	
	});
	
	$("#Collected").click(function(){
		DelCollection($("#CollectedName").text());
		$('#ListofCollection ul li:not(:first)').remove();
		$('#ListofPlant ul li:not(:first)').remove();
		Display_CollectionData();
		Display_Data();	
	});

	//=====================================================================================
	//Search Event
	//=====================================================================================
	$('#QuicksearchBtn').tap(function(){
		value = $("#QuicksearchInput").val();
		$('#ListofResult ul li:not(:first)').remove();
		CheckAdvanceSearch(value);
	});
	
	$('#searchBtn').tap(function(){
		value = $("#searchInput").val();
		$('#ListofResult ul li:not(:first)').remove();
		CheckAdvanceSearch(value);

	});
	//=====================================================================================
	//Reset Event
	//=====================================================================================
	$('#ResetBtn').tap(function(){
		window.location.reload();
	});
	//=====================================================================================
	//test Event
	//=====================================================================================
	$('.test2').live("click",function(){
		var Selectedid = $(this).attr("type");
		DeleteRecordById(Selectedid);
		$('#ListofRecord li:not(:first)').remove();
		Display_RecordData();
		Display_JunkbucketData();
	});
	
/*	$('#deleteBtn').click(function(){
		var Selectedid = $(this).attr("type");
		DeleteRecordById(Selectedid);
		$('#ListofRecord li:not(:first)').remove();
		Display_RecordData();
		Display_JunkbucketData();
	});
*/	
	$('.Btnevent').live("click",function(){
		var Selectedid = $(this).attr("type");
		RecoverRecordById(Selectedid);
		$('#ListofJunk li:not(:first)').remove();
		$('#ListofRecord li:not(:first)').remove();
		Display_RecordData();
		Display_JunkbucketData();
	});
	//=====================================================================================
	//GEO Event
	//=====================================================================================
	$('#GeoGet').tap(function(){
		getLocation();
	});
	//=====================================================================================
	//Photo Capture Event
	//=====================================================================================
	$("#TakePhoto").tap(function(){
		capturePhotoForRipple(); //For testing in Ripple
		//capturePhoto();		 //For testing in Real Device
	});
	//=====================================================================================
	//Record Submit Event
	//=====================================================================================
	$("#submitBtn").tap(function(){
		$('#ListofRecord li:not(:first)').remove();
		InsertRecordData();
	});
	
	//=====================================================================================
	//Reset Event
	//=====================================================================================
	$("#ResetBtn2").tap(function(){
		ResetFunctionForRecord();
	});
	
});

//=========================================================================================
//Display the data of browse
//=========================================================================================
function Display_Data(){
	  db.transaction(function (txs) {
		  	txs.executeSql('SELECT * FROM Plant', [], function (txs, results) {
				var len = results.rows.length, i;
				$("#plantList").show();
				for(i = 0; i < len; i++) {
				  var Pdata = results.rows.item(i);
				  var PL = $('#plantList').clone();
				  //PL.removeAttr("id");
				  //PL.attr("id",Pdata.id);		  
				  //=======================================================================
				  //Data() Test
				  //=======================================================================
				  	PL.attr("id","SelectPlant");
				  	PL.data("idKeeper",Pdata.id);
				  	PL.data("NameKeeper",Pdata.name);
				  //=======================================================================
				  PL.appendTo('#ListofPlant ul');
				  //
				  if(Pdata.collection == "Collected"){
					  PL.find('#Goto').attr("href","#detailinfoCollected");
				  }
				  //
				  PL.find('#ListImg').attr("src",Pdata.img);
				  PL.find('#ListImg').attr("height","84");
				  PL.find('#ListImg').attr("width","81");
				  PL.find('#ListName').text(Pdata.name);
				  SetSpecies(PL,Pdata.speciesId);
				}
				$("#plantList").hide();
			 });
	  		});
		}

//=========================================================================================
//Set the Categories(Species)
//=========================================================================================
function Set_Category_Species(){
	  db.transaction(function (txs) {
		  	txs.executeSql('SELECT * FROM Species', [], function (txs, results) {
				var len = results.rows.length, i;
				$("#CategoryField").show();
				for(i = 0; i < len; i++) {
				  var Cdata = results.rows.item(i);
				  var CL = $('#CategoryField').clone();
				  CL.attr("id",Cdata.species);
				  CL.data("idKeeper",Cdata.speciesId);
				  CL.appendTo('#ListofCategory');
				  CL.find('#Title').text(Cdata.species);
				  Display_Category_Species(CL.data("idKeeper"),CL);
				}
				$("#CategoryField").hide();
			 });
	  		});
		}

//=========================================================================================
//Display the Categories of Species
//=========================================================================================
function Display_Category_Species(id,species){
	  db.transaction(function (txs) {
		  	txs.executeSql('SELECT * FROM Plant where speciesId="' + id + '"', [], function (txs, results) {
		  		var len = results.rows.length, i;
		  		$("#CategoryList").show();
				for(i = 0; i < len; i++) {
				  var Cdata = results.rows.item(i);
				  var CL = $('#CategoryList').clone();  
				  CL.attr("id","CategoryPlant");
				  CL.data("idKeeper",Cdata.id);
				  CL.appendTo(species.find("#testfield"));
				  CL.find('#ListImg').attr("src",Cdata.img);
				  CL.find('#ListImg').attr("height","84");
				  CL.find('#ListImg').attr("width","81");
				  CL.find('#ListName').text(Cdata.name);
				  SetSpecies(CL,Cdata.speciesId);
				}
				$("#CategoryList").hide();
			 });
	  		});
		}

//=========================================================================================
//Display species on browse by ID
//=========================================================================================
function SetSpecies(target,id){
	  db.transaction(function (txs) {
		  txs.executeSql('SELECT * FROM Species where speciesId="' + id + '"', [], function (txs, results1) {
			  var Tempdata = results1.rows.item(0);
			  target.find('#ListBrief').text(Tempdata.species);
		  });
	  });
	}

//=========================================================================================
//Set the Categories(Color)
//=========================================================================================
function Set_Category_Color(){
	  db.transaction(function (txs) {
		  	txs.executeSql('SELECT * FROM Color', [], function (txs, results) {
				var len = results.rows.length, i;
				$("#ColorField").show();
				for(i = 0; i < len; i++) {
				  var Cdata = results.rows.item(i);
				  var CL = $('#ColorField').clone();
				  CL.attr("id",Cdata.Color);
				  CL.data("idKeeper",Cdata.ColorId);
				  CL.appendTo('#ListofColor');
				  CL.find('#ColorTitle').text(Cdata.Color);
				  Display_Category_Color(CL.data("idKeeper"),CL);
				}
				$("#ColorField").hide();
			 });
	  		});
		}

//=========================================================================================
//Display the Categories of Color
//=========================================================================================
function Display_Category_Color(id,color){
	  db.transaction(function (txs) {
		  	txs.executeSql('SELECT * FROM Plant where ColorId="' + id + '"', [], function (txs, results) {
		  		var len = results.rows.length, i;
		  		$("#ColorList").show();
				for(i = 0; i < len; i++) {
				  var Cdata = results.rows.item(i);
				  var CL = $('#ColorList').clone();
				  CL.attr("id","CategoryPlant");
				  CL.data("idKeeper",Cdata.id);
				  CL.appendTo(color.find("#Colorfield"));
				  CL.find('#ListImg').attr("src",Cdata.img);
				  CL.find('#ListImg').attr("height","84");
				  CL.find('#ListImg').attr("width","81");
				  CL.find('#ListName').text(Cdata.name);
				  SetColor(CL,Cdata.ColorId);
				}
				//$("#ColorList").hide();
			 });
	  		});
		}

//=========================================================================================
//Display species on browse by ID
//=========================================================================================
function SetColor(target,id){
	  db.transaction(function (txs) {
		  txs.executeSql('SELECT * FROM Color where ColorId="' + id + '"', [], function (txs, results1) {
			  var Tempdata = results1.rows.item(0);
			  target.find('#ListBrief').text(Tempdata.Color);
		  });
	  });
	}

//=========================================================================================
//Set the Categories(Color)
//=========================================================================================
function Set_Category_Type(){
	  db.transaction(function (txs) {
		  	txs.executeSql('SELECT * FROM Type', [], function (txs, results) {
				var len = results.rows.length, i;
				$("#TypeField").show();
				for(i = 0; i < len; i++) {
				  var Cdata = results.rows.item(i);
				  var CL = $('#TypeField').clone();
				  CL.attr("id",Cdata.Type);
				  CL.data("idKeeper",Cdata.TypeId);
				  CL.appendTo('#ListofType');
				  CL.find('#TypeTitle').text(Cdata.Type);
				  Display_Category_Type(CL.data("idKeeper"),CL);
				}
				$("#TypeField").hide();
			 });
	  		});
		}

//=========================================================================================
//Display the Categories of Color
//=========================================================================================
function Display_Category_Type(id,type){
	  db.transaction(function (txs) {
		  	txs.executeSql('SELECT * FROM Plant where TypeId="' + id + '"', [], function (txs, results) {
		  		var len = results.rows.length, i;
		  		$("#TypeList").show();
				for(i = 0; i < len; i++) {
				  var Cdata = results.rows.item(i);
				  var CL = $('#TypeList').clone();
				  CL.attr("id","CategoryPlant");
				  CL.data("idKeeper",Cdata.id);
				  CL.appendTo(type.find("#Typefield"));
				  CL.find('#ListImg').attr("src",Cdata.img);
				  CL.find('#ListImg').attr("height","84");
				  CL.find('#ListImg').attr("width","81");
				  CL.find('#ListName').text(Cdata.name);
				  SetSpecies(CL,Cdata.ColorId);
				}
				//$("#TypeList").hide();
			 });
	  		});
		}

//=========================================================================================
//Display Detail Information of selection plant by id
//=========================================================================================
function GetInfoById(id){
	db.transaction(function (txs){
		txs.executeSql('SELECT * FROM Plant where id="' + id + '"', [], function(txs, results){
			var len = results.rows.length, i;
			for(i = 0; i < len; i++) {
				var Pdata = results.rows.item(i);
				$("#DetailName").text(Pdata.name);
				$('#BriefContent').html("<p>" + Pdata.Brief_describe +"</p>");
				$('#DetailContent').html(Pdata.describe);
				$('#PlantImage').html("<img src='" + Pdata.img + "'/>");}
		});
	});
}

//=========================================================================================
//Display Detail Information of selection plant by id For Category
//=========================================================================================
function GetInfoByIdForCategory(id){
	db.transaction(function (txs){
		txs.executeSql('SELECT * FROM Plant where id="' + id + '"', [], function(txs, results){
			var len = results.rows.length, i;
			for(i = 0; i < len; i++) {
				var Pdata = results.rows.item(i);
				$("#DetailCategoryName").text(Pdata.name);
				$('#BriefCategoryContent').html("<p>" + Pdata.Brief_describe +"</p>");
				$('#DetailCategoryContent').html(Pdata.describe);
				$('#PlantCategoryImage').html("<img src='" + Pdata.img + "'/>");}
		});
	});
}

//=========================================================================================
//Display Detail Information of selection plant by name
//=========================================================================================
function GetInfoByName(name){
	db.transaction(function (txs){
		txs.executeSql('SELECT * FROM Plant where name="' + name + '"', [], function(txs, results){
			var len = results.rows.length, i;
			for(i = 0; i < len; i++) {
				var Pdata = results.rows.item(i);
				$("#CollectedName").text(Pdata.name);
				$('#CollectedBriefContent').html("<p>" + Pdata.Brief_describe +"</p>");
				$('#CollectedContent').html(Pdata.describe);
				$('#CollectedImage').html("<img src='" + Pdata.img + "'/>");}
		});
	});
}

//=========================================================================================
//Display the data of Collection
//=========================================================================================
function Display_CollectionData(){
	  db.transaction(function (txs) {
		  	txs.executeSql('SELECT * FROM Plant where collection = "Collected" ', [], function (txs, results) {
				var len = results.rows.length, i;
				$("#CollectionList").show();
				for(i = 0; i < len; i++) {
				  var Pdata = results.rows.item(i);
				  var PL = $('#CollectionList').clone();
				  PL.attr("id","SelectPlant");
				  PL.data("idKeeper",Pdata.id);
				  PL.data("NameKeeper",Pdata.name);
				  PL.appendTo('#ListofCollection ul');
				  PL.find('#ListImg').attr("src",Pdata.img);
				  PL.find('#ListImg').attr("height","84");
				  PL.find('#ListImg').attr("width","81");
				  PL.find('#ListName').text(Pdata.name);
				  SetSpecies(PL,Pdata.speciesId);
				}
				$("#CollectionList").hide();
			 });
	  		});
		}

//=========================================================================================
//Check Advance Search Options
//=========================================================================================
function CheckAdvanceSearch(value){
	var type = $("#selectType").val();
	var color = $("#selectColor").val();
	var species = $("#selectSpecies").val();
	
	var Token = 0;
	var TToken = 0;
	var CToken = 0;
	var SToken = 0;

	if(type != ""){
		TToken = TToken + 1;
	}

	if(color != ""){
		CToken = CToken + 3;
	}

	if(species != ""){
		SToken = SToken + 5;
	}

	Token = TToken + CToken + SToken;
	
	$("#selectType").val("");
	$("#selectColor").val("");
	$("#selectSpecies").val("");

	SwitchSQL(value,Token,type,color,species);

}

//=========================================================================================
//Switch SQL String
//=========================================================================================
function SwitchSQL(searchstring,token,type,color,species){
		switch(token){
		case 0:
			var SQLString = 'select * from Plant where name like "%' + searchstring + '%"';
			searchPlant(SQLString);
			break;
		case 1:
			var SQLString = 'select * from Plant where name like "%' + searchstring + '%" and TypeId="' + type + '" ';
			searchPlant(SQLString);
			break;
		case 3:
			var SQLString = 'select * from Plant where name like "%' + searchstring + '%" and ColorId="' + color + '" ';
			searchPlant(SQLString);
			break;
		case 5:
			var SQLString = 'select * from Plant where name like "%' + searchstring + '%" and speciesId="' + species + '" ';
			searchPlant(SQLString);
			break;
		case 4:
			var SQLString = 'select * from Plant where name like "%' + searchstring + '%" and TypeId="' + type + '" and ColorId="' + color + '" ';
			searchPlant(SQLString);
			break;
		case 6:
			var SQLString = 'select * from Plant where name like "%' + searchstring + '%" and TypeId="' + type + '" and speciesId="' + species + '" ';
			searchPlant(SQLString);
			break;
		case 8:
			var SQLString = 'select * from Plant where name like "%' + searchstring + '%" and ColorId="' + color + '" and TypeId="' + species + '" ';
			searchPlant(SQLString);
			break;
		case 9:
			var SQLString = 'select * from Plant where name like "%' + searchstring + '%" and speciesId="' + species + '"and ColorId="' + color + '"and TypeId="' + type + '" ';
			searchPlant(SQLString);
			break;
		default:
			alert("Warning!");
		}
}

//=========================================================================================
//Search Function
//=========================================================================================
function searchPlant(SQLString){
	db.transaction(function(txs){
	txs.executeSql(SQLString, [], function (txs,results){
		var len = results.rows.length, i;
		for(i = 0; i < len; i++) {
		  var Pdata = results.rows.item(i);
		  $("#ResultList").show();
		  var PL = $('#ResultList').clone();
		  PL.attr("id","SelectPlant");
		  PL.data("idKeeper",Pdata.id);
		  PL.appendTo('#ListofResult ul');
		  PL.find('#ListImg').attr("src",Pdata.img);
		  PL.find('#ListImg').attr("height","84");
		  PL.find('#ListImg').attr("width","81");
		  PL.find('#ListName').text(Pdata.name);
		  SetSpecies(PL,Pdata.speciesId);
		}
		$("#ResultList").hide();
	 });
	});
}

//=========================================================================================
//Add Collection Function
//=========================================================================================
function AddCollection(Name){
	db.transaction(function (txs){
		txs.executeSql('update Plant set collection = "Collected" where name="' + Name + '"', [], function(txs, results){
		GetInfoByName(Name);
		});
	});
}

//=========================================================================================
//Delete Collection Function
//=========================================================================================
function DelCollection(Name){
	db.transaction(function (txs){
		txs.executeSql('update Plant set collection = "" where name="' + Name + '"', [], function(txs, results){

		});
	});
}

//=========================================================================================
//Geo Location Function Group
//=========================================================================================
function onSuccess(position) {
	$("#GeoLocation").val(position.coords.latitude + " ," + position.coords.longitude);
}

function onError(error) {
    alert('message: ' + error.message + '\n');
}

function getLocation(){
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

//=========================================================================================
//Camera Function Group
//=========================================================================================
function capturePhotoForRipple() {
	var imageData = "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";
	$("#PhotoContainer").attr("src","data:image/jpeg;base64," + imageData);
	$("#PhotoContainer").data("Image",imageData);
	}

function onPhotoDataSuccess(imageData) {
	$("#PhotoContainer").attr("src","data:image/jpeg;base64," + imageData);
  }

function capturePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
  }

function onFail(message) {
	alert('Failed because: ' + message);
}

//=========================================================================================
//Insert the data of the new record to DataBase
//=========================================================================================
function InsertRecordData(){
	  db.transaction(function (txs) {
		  	txs.executeSql('SELECT * FROM Record', [], function (txs, results) {
				var len = results.rows.length;
				var RecordId = len++;
				var RecordTitle = $("#RecordTitle").val();
				var StudentName = $("#studentname").val();
				var Site = $("#visitedSite").val();
				var RecordDate_Month = $("#month").val();
				var RecordDate_Day =  $("#day").val();
				var RecordDate_Year = $("#year").val();
				var Imgdata = $("#PhotoContainer").data("Image");
				var PlantName = $("#Plantname").val();
				var GEOLocation =$("#GeoLocation").val();
				var Description =$("#textarea").val();
				var SQLString = 'insert into Record (RecordId, RecordTitle, Student_name,date_month, date_day, date_year, VisitSite, Plant_name, DescText,Location, PhotoData, Deleted) values("' + RecordId + '", "' + RecordTitle + '", "' + StudentName + '", "' + RecordDate_Month + '", "' + RecordDate_Day + '", "' + RecordDate_Year + '","' + Site + '", "' + PlantName + '", "' + Description + '", "' + GEOLocation + '", "' + Imgdata + '", "")' ;
				
				txs.executeSql(SQLString, [], function (txs, results) {
				});
				
				Display_RecordData();
			 });
	  		});
		}

//=========================================================================================
//Display all record Data
//=========================================================================================
function Display_RecordData(){
	  db.transaction(function (txs) {
		  	txs.executeSql('SELECT * FROM Record where Deleted = ""', [], function (txs, results) {
				var len = results.rows.length, i;
				$("#RecordList").show();
				for(i = 0; i < len; i++) {
				  var Rdata = results.rows.item(i);
				  var RL = $('#RecordList').clone();
				  RL.attr("id","SelectRecord");
				  RL.data("idKeeper",Rdata.RecordId);
				  RL.appendTo('#ListofRecord');
				  RL.find('#ListImg').attr("src","data:image/jpeg;base64," + Rdata.PhotoData);
				  RL.find('#ListImg').attr("height","84");
				  RL.find('#ListImg').attr("width","81");
				  RL.find('#ListName').text(Rdata.RecordTitle);
				  RL.find('#ListBrief').text("Plant_name: " + Rdata.Plant_name);
				  RL.find('#ListBrief2').text("Date:"+Rdata.date_month + "." + Rdata.date_day + "." + Rdata.date_year);
				  RL.find('#SlidedeleteBtn').attr("type",Rdata.RecordId);
				}
				$("#RecordList").hide();
			 });
	  		});
		}

//=========================================================================================
//Display Detail Information of Selected Record by id
//=========================================================================================
function GetRecordInfoById(id){
	db.transaction(function (txs){
		txs.executeSql('SELECT * FROM Record where RecordId="' + id + '"', [], function(txs, results){
			var len = results.rows.length, i;
			for(i = 0; i < len; i++) {
				var Rdata = results.rows.item(i);
				$("#DetailRecordName").text(Rdata.RecordTitle);
				$('#BriefRecordContent').html("<p>Student Name: " + Rdata.Student_name + "</p><p> Date: " + Rdata.date_month +"."+ Rdata.date_day +" " +Rdata.date_year+ "</p><p>Site Visited: " +Rdata.VisitSite+"</p>");
				$('#DetailRecordContent').html("<p> Plant Name Name: " + Rdata.Plant_name + "</p><p>Location: " +Rdata.Location+"</p>");
				$('#RecordDescription').html("<p>" + Rdata.DescText +"</p>");
				$('#RecordImage').html("<img style='height:300px; width:330px;' src=data:image/jpeg;base64," + Rdata.PhotoData + " />");}
		});
	});
}

//=========================================================================================
//DeleteRecord Record by id
//=========================================================================================
function DeleteRecordById(id){
	db.transaction(function (txs){
		txs.executeSql('update Record set Deleted = "Delete" where RecordId="' + id + '"', [], function(txs, results){

		});
	});
}

//=========================================================================================
//DeleteRecord Record by Title
//=========================================================================================
/*function DeleteRecordByTitle(title){
	db.transaction(function (txs){
		txs.executeSql('update Record set Deleted = "Delete" where RecordTitle = "' + title + '"', [], function(txs, results){
		});
	});
}
*/
//=========================================================================================
//Recover Record by id
//=========================================================================================
function RecoverRecordById(id){
	db.transaction(function (txs){
		txs.executeSql('update Record set Deleted = "" where RecordId="' + id + '"', [], function(txs, results){

		});
	});
}

//=========================================================================================
//Reset the form of creating record
//=========================================================================================
function ResetFunctionForRecord(){
	$('#RecordTitle').val("");
	$('#studentname').val("");
	$('#visitedSite').val("");
	$('#PhotoContainer').attr("src","images/camera.png");
	$('#Plantname').val("");
	$('#GeoLocation').val("");
	$('#textarea').val("");
}

//=========================================================================================
//Display all Junkbucket Data
//=========================================================================================
function Display_JunkbucketData(){
	  db.transaction(function (txs) {
		  	txs.executeSql('SELECT * FROM Record where Deleted = "Delete"', [], function (txs, results) {
				var len = results.rows.length, i;
				$("#JunkList").show();
				for(i = 0; i < len; i++) {
				  var Rdata = results.rows.item(i);
				  var RL = $('#JunkList').clone();
				  RL.attr("id","SelectRecord");
				  RL.data("idKeeper",Rdata.RecordId);
				  RL.appendTo('#ListofJunk');
				  RL.find('#ListImg').attr("src","data:image/jpeg;base64," + Rdata.PhotoData);
				  RL.find('#ListImg').attr("height","84");
				  RL.find('#ListImg').attr("width","81");
				  RL.find('#ListName').text(Rdata.RecordTitle);
				  RL.find('#ListBrief').text("Plant_name: " + Rdata.Plant_name);
				  RL.find('#ListBrief2').text("Date:"+Rdata.date_month + "." + Rdata.date_day + "." + Rdata.date_year);
				  RL.find('#SlideRecordBtn').attr("type",Rdata.RecordId);
				}
				$("#JunkList").hide();
			 });
	  		});
		}
