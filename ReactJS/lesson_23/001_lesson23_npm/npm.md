#npm

npm (аббр. node package manager) — это стандартный менеджер пакетов, автоматически устанавливающийся вместе с Node.js. Он используется для скачивания пакетов из облачного сервера npm, либо для загрузки пакетов на эти сервера, 
а также для установки и управления зависмостями проекта. 

## Установка npm 

npm устанавливается автоматически при установке NodeJS. То есть, для установки npm следует установить NodeJS. 

https://nodejs.org/en/download/ 

После установки NodeJS в терминале станет доступна команда npm. 

## Файл package.json 

Файл package.json содержит в себе информацию о вашем приложении: название, версия, зависимости и тому подобное. Любая директория, в которой есть этот файл, интерпретируется как npm-пакет, даже если вы не собираетесь публиковать его.
Способ использования файла package.json зависит от того, собираетесь ли вы скачивать пакет или публиковать его. 

Для быстрого создания файла в директории приложения следует выполнить следующую команду в терминале: 

```
$ npm init -y
``` 

Например, при выполнении данной команды в директории /app, будет создан следующий файл package.json: 

```
{
  "name": "app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

``` 
Поля файла package.json: 

* name – имя проекта
* version – версия проекта
* description – описание проекта
* main – стартовый файл приложения 
* scripts - скрипты, выполняемые через терминал с помощью команды npm run *имя_скрипта*. Например:  

```
$ npm run test 
```

Некоторые скрипты могут быть вынесены непосредственно в список свойств файла package.json. Например: 

* test - скрипт, который будет запущен командой npm test
* start - скрипт, который будет запущен командой npm start 
* stop - скрипт, который будет запущен командой npm stop 

* keywords – список ключевых слов
* author – автор
* license – тип лицензии 
	
* dependencies - зависимости проекта
* devDependencies -  зависимости  проекта на стадии разработки
	
## Установка пакетов npm

### Установка пакетов вручную 

Для установки пакета npm вручную следует выполнить в терминале команду npm с названием нужного пакета в качестве аргумента команды, и пакет будет автоматически скачан в текущую директорию. 

Например: 

```
$ npm install react

``` 

При выполнении данной команды в текущей директории будет создана папка node_modules с файлами скачанного пакета react. 

Для установки конкретной версии пакета следует указать версию при установке следующим образом(на примере пакета react): 

```
$ npm install react@15.3.1 
``` 


### Установка пакетов глобально 

Для установки пакета npm глобально следует выполнить в терминале следующую команду npm (для примера используется пакет webpack): 

```
$ npm install -g webpack
```

### Установка пакетов локально 

По умолчанию npm устанавливает пакеты локально.

#### Установка пакетов в качестве зависимости проекта(dependencies) 

Для установки пакета npm в качестве зависимости проекта следует выполнить в терминале следующую команду npm(для примера используется пакет react): 

```
$ npm install --save react
```

При выполнении данной команды в директории /app, в файл package.json(при его наличии в директории) будет добавлена следующая запись: 

```
  "dependencies": {
    "react": "15.3.1"
	}
```

#### Установка пакетов в качетсве зависимости проекта на стадии разработки(devDependencies) 

Для установки пакета npm в качестве зависимости проекта на стадии разработки следует выполнить в терминале следующую команду npm(для примера используется пакет webpack): 
```
$ npm install --save-dev webpack  
``` 

При выполнении данной команды в директории /app, в файл package.json(при его наличии в директории) будет добавлена следующая запись: 

```
  "devDependencies": {
      "webpack": "1.13.2"
	  }
```


### Установка пакетов с помощью package.json  

При наличии в текущей директории файла package.json с указанными зависимостями для их установки достаточно выполнить в директории следубщую команду npm: 

```
$ npm install 
``` 

## Вывод списка установленных пакетов 

Для вывода списка пакетов, установленных локально, в npm используется следующая команда:  
```
$ npm list
```

Для получения списка пакетов, установленных глобально, используйте следующую команду: 
```
$ npm list -g 
``` 

## Удаление пакетов npm 

Для удаления пакета используется команда npm uninstall. По умолчанию, пакеты удаляются локально. Например: 

```
$ npm uninstall webpack
```

Следует отметить, что удаление пакета с помощью команды uninstall не удаляет его из списка зависимостей в файле package.json 

Для удаления глобально установленного пакета используйте следующую команду(на примере пакета webpack): 

```
$ npm uninstall -g webpack
```
Удаление папки node_modules
```
$ npm i -g rimraf
$ cd /path/to/project
$ rimraf node_modules
```








