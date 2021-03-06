/*
 * 文件名称：MyApp.java.
 * 版    权：Shenzhen Coship
 * Electronics Co.,Ltd. Copyright 2010-2020,  All rights reserved
 * 描    述：<概要描述>
 * 创 建 人：Huangliufei/905735
 * 创建时间：Oct 9, 2011
 *
 * 修改记录：1.<修改时间>  <修改人>  <修改描述>
 *           2.<修改时间>  <修改人>  <修改描述>
 */
package com.coship.sdp.sce.dp.appstore.entity;

import java.util.Date;

import javax.persistence.Entity;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import com.coship.sdp.access.entity.EntityObject;

/**
 * <我的应用>.
 * @author Huangliufei/905735
 * @version [版本号, Oct 9, 2011]
 * @since [产品/模块版本]
 */
@Entity
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class MyApp extends EntityObject
{

    /**
     * <注释内容>.
     */
    private static final long serialVersionUID = 1L;

    /**
     * 当前用户id，机顶盒的id.
     */
    private String uid;

    /**
     * 应用id(主键)
     */
    private String appId;

    /**
     * 应用的包名
     */
    private String appPackageName;

    /**
     * 添加应用时间.
     */
    private Date addTime;

    public String getUid()
    {
        return uid;
    }

    public void setUid(String uid)
    {
        this.uid = uid;
    }

    public Date getAddTime()
    {
        Date date = addTime;
        return date;
    }

    public void setAddTime(Date addTime)
    {
        if (null != addTime)
        {
            this.addTime = (Date) addTime.clone();
        }
        else
        {
            this.addTime = new Date();
        }
    }

    public String getAppId()
    {
        return appId;
    }

    public void setAppId(String appId)
    {
        this.appId = appId;
    }

    public String getAppPackageName()
    {
        return appPackageName;
    }

    public void setAppPackageName(String appPackageName)
    {
        this.appPackageName = appPackageName;
    }

}
