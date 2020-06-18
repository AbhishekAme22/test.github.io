
const cachename = 'v1';
const assets = [ '/', '/first.html','/thire.html','/sec.html','first.js']




self.addEventListener('install',evt=>{



    console.log("service worker has installed")
    
    evt.waitUntil(
    caches.open(cachename).then(cache=>{
    
    console.log("cachingf files")
        cache.addAll(assets)
    }))
    
    })










    self.addEventListener('activate',evt=>{



        console.log("service worker has been activated")
        
        
        
        })




        self.addEventListener('fetch',evt=>{

            console.log('fetch event',evt)
            evt.respondWith(
            
               fetch(evt.request).catch(()=>caches.match(evt.request))
            )
            
            })


