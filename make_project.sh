git clone --depth=1 -b start git@github.com:dipenparmar12/awsome-react-practice.git $1 
cd $1
git checkout start
git checkout -b $1
cp -rv ./start ./$1
cd $1